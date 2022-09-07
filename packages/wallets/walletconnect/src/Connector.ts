import type _WalletConnectProvider from '@walletconnect/ethereum-provider';
import type { IWCEthRpcConnectionOptions } from '@walletconnect/types';
import {
  type Provider,
  type WalletName,
  type WalletStoreActions,
  AbstractConnector,
} from '@web3-wallet/core';
import EventEmitter3 from 'eventemitter3';

export const URI_AVAILABLE = 'URI_AVAILABLE';

type WalletConnectProvider = _WalletConnectProvider & Provider;

export const walletName = 'WalletConnect' as WalletName<'WalletConnect'>;

export class WalletConnectConnector extends AbstractConnector<WalletConnectProvider> {
  public provider?: WalletConnectProvider;
  public readonly events = new EventEmitter3();

  private readonly options: IWCEthRpcConnectionOptions;

  constructor({
    actions,
    options,
    onError,
  }: {
    actions: WalletStoreActions;
    options: IWCEthRpcConnectionOptions;
    onError?: AbstractConnector['onError'];
  }) {
    super(walletName, actions, onError);
    this.options = options;
  }

  private onDisplayUri = (
    _: Error | null,
    payload: { params: string[] },
  ): void => {
    this.events.emit(URI_AVAILABLE, payload.params[0]);
  };

  public async detectProvider(): Promise<WalletConnectProvider> {
    const m = await import('@walletconnect/ethereum-provider');

    const provider = new m.default({
      ...this.options,
    }) as unknown as WalletConnectProvider;

    this.provider = provider;

    return provider;
  }

  protected override addEventListeners(): AbstractConnector['removeEventListeners'] {
    if (!this.provider) return;

    const removeEventListeners = super.addEventListeners();
    const onDisplayUri = this.onDisplayUri.bind(this);
    this.provider.connector.on('display_uri', onDisplayUri);

    return () => {
      if (!this.provider) return;
      removeEventListeners?.();

      if (typeof this.provider.off === 'function') {
        this.provider.off('display_uri', onDisplayUri);
      } else if (typeof this.provider.removeListener === 'function') {
        this.provider.removeListener('display_uri', onDisplayUri);
      }
    };
  }

  public override async autoConnect(): Promise<boolean> {
    await this.lazyInitialize();
    if (!this.provider?.connected) {
      console.debug('No existing connection');
      return false;
    }
    return await super.autoConnect();
  }

  public override async disconnect(): Promise<void> {
    this.removeEventListeners?.();
    await this.provider?.disconnect();
    super.disconnect();
  }
}
