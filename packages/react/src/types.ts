import type { Networkish } from '@ethersproject/networks';
import type { BaseProvider, Web3Provider } from '@ethersproject/providers';
import type {
  AbstractConnector,
  State,
  Store,
  WalletName,
} from '@web3-wallet/core';
import type { UseBoundStore } from 'zustand';

export * from '@web3-wallet/core';

export interface Wallet<
  Connector extends AbstractConnector = AbstractConnector,
> {
  name: WalletName;
  connector: Connector;
  store: UseBoundStore<
    Store & {
      getServerState?: () => State;
    }
  >;
  hooks: {
    useChainId: () => State['chainId'];
    useAccounts: () => State['accounts'];
    useIsConnecting: () => State['isConnecting'];
    useAccount: () => string | undefined;
    useIsConnected: () => boolean;
    useProvider: <T extends BaseProvider = Web3Provider>(
      network?: Networkish,
      enabled?: boolean,
    ) => T | undefined;
    useENSNames: (provider?: BaseProvider) => (string | undefined)[];
    useENSName: (provider?: BaseProvider) => undefined | string;
  };
}

export type SelectedWalletState = {
  selectedWallet?: WalletName;
  connectionId?: number;
};

export type SelectedWallet = Wallet['hooks'] & {
  setSelectedWallet: (walletName: WalletName) => void;
  useSelectedWallet: () => Wallet;
  useConnectionId: () => SelectedWalletState['connectionId'];
  useConnect: () => Wallet['connector']['connect'];
  useAutoConnect: () => Wallet['connector']['autoConnect'];
  useAutoConnectOnce: () => Wallet['connector']['autoConnectOnce'];
  useDisconnect: () => Wallet['connector']['disconnect'];
};
