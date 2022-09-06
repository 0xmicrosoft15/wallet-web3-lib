import type { WalletName } from '@web3-wallet/core';
import { useMemo } from 'react';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import type { SelectedWallet, Wallet } from './types';

type SelectedWalletState = {
  selectedWallet?: WalletName;
  connectionId?: number;
};

export const createSelectedWallet = (
  wallets: Wallet[],
  options: {
    defaultSelectedWallet?: WalletName;
    key?: string;
  } = {},
): SelectedWallet => {
  const { defaultSelectedWallet, key = '@web3-wallet' } = options;

  if (!wallets.length) throw new Error(`wallets can't be empty`);

  const useStore = create<SelectedWalletState>()(
    persist(
      () =>
        ({
          connectionId: undefined,
          selectedWallet: defaultSelectedWallet || wallets[0].name,
        } as SelectedWalletState),
      {
        name: key,
        version: 0,
      },
    ),
  );

  const useSelectedWallet: SelectedWallet['useSelectedWallet'] = () => {
    const selectedWalletName = useStore((s) => s.selectedWallet);
    return useMemo(
      () => wallets.find((w) => w.name === selectedWalletName) as Wallet,
      [selectedWalletName],
    );
  };

  const setSelectedWallet: SelectedWallet['setSelectedWallet'] = (
    selectedWallet: WalletName,
  ): void => {
    useStore.setState({
      selectedWallet,
    });
  };

  const useConnectionId: SelectedWallet['useConnectionId'] = () => {
    return useStore((s) => s.connectionId);
  };

  const getCombineHooks = (): Wallet['hooks'] => {
    /**
     * combine hooks
     *
     * If we don't combine the hooks, the hooks will be called base on
     * selectedWalletName, which violates the react hook rules.
     *
     * Combine hooks to always call all the hooks in consistent order
     *  so that we don't violates the react hook rules:
     *
     * https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
     */
    const combinedHooks: Record<string, unknown> = {};

    for (const hookName of Object.keys(wallets[0].hooks).sort()) {
      combinedHooks[hookName] = (...args: unknown[]) => {
        let hookFnOutput: unknown;
        const selectedWalletName = useStore.getState().selectedWallet;

        for (const wallet of wallets) {
          const hookFn = wallet.hooks[hookName as keyof Wallet['hooks']] as (
            ...args: unknown[]
          ) => unknown;

          const value = hookFn(...args);

          if (wallet.name === selectedWalletName) {
            hookFnOutput = value;
          }
        }

        return hookFnOutput;
      };
    }

    return combinedHooks as Wallet['hooks'];
  };

  const useActivate: SelectedWallet['useActivate'] = () => {
    const wallet = useSelectedWallet();

    const activate: Wallet['connector']['activate'] = async (...args) => {
      await wallet.connector.activate(...args);
      useStore.setState({ connectionId: Date.now() });
    };

    return activate;
  };

  const useConnectEagerly: SelectedWallet['useConnectEagerly'] = () => {
    const wallet = useSelectedWallet();
    const connectEagerly: Wallet['connector']['connectEagerly'] = async (
      ...args
    ) => {
      const result = await wallet.connector.connectEagerly(...args);
      useStore.setState({ connectionId: Date.now() });
      return result;
    };
    return connectEagerly;
  };

  const useConnectEagerlyOnce: SelectedWallet['useConnectEagerlyOnce'] = () => {
    const wallet = useSelectedWallet();
    const connectEagerly: Wallet['connector']['connectEagerlyOnce'] = async (
      ...args
    ) => {
      const result = await wallet.connector.connectEagerlyOnce(...args);
      useStore.setState({ connectionId: Date.now() });
      return result;
    };
    return connectEagerly;
  };

  const useDeactivate: SelectedWallet['useDeactivate'] = () => {
    const wallet = useSelectedWallet();

    const deactivate: Wallet['connector']['deactivate'] = async (...args) => {
      const result = await wallet.connector.deactivate(...args);
      useStore.setState({ connectionId: undefined });
      return result;
    };

    return deactivate;
  };

  return {
    ...getCombineHooks(),
    useSelectedWallet: useSelectedWallet,
    setSelectedWallet,
    useConnectionId: useConnectionId,
    useActivate,
    useConnectEagerly,
    useConnectEagerlyOnce,
    useDeactivate,
  };
};
