import type {
  Brand,
  Wallet as CoreWallet,
  WalletName,
  WalletState,
} from '@web3-wallet/core';
import type { StoreApi, UseBoundStore } from 'zustand';

import { CoreHooksPlugin } from './plugins/core-hooks';
import { Web3ProviderPlugin } from './plugins/web3-provider';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyFn = (...args: any[]) => any;

export interface Wallet extends CoreWallet, WalletBuiltinHooks {
  $getStore: () => UseBoundStore<StoreApi<WalletState>>;
  usePlugin: <T extends PluginApi = PluginApi>(pluginName: PluginName) => T;
  $pluginApiMap: PluginApiMap;
}

/**
 * The dependencies of the builtin plugins are not checked, don't mix up orders.
 */
export const builtinPlugins = [
  CoreHooksPlugin.create(),
  Web3ProviderPlugin.create(),
];

export type WalletBuiltinHooks = CoreHooksPlugin.Api['hooks'] &
  Web3ProviderPlugin.Api['hooks'];

export type CurrentWallet = Omit<Wallet, 'name' | '$pluginApiMap'> & {
  switchCurrentWallet: (name: WalletName) => void;
  useName: () => Wallet['name'];
  useConnectionStatus: () => WalletConnectionStatus;

  connectWith: (
    name: WalletName,
    ...args: Parameters<Wallet['connect']>
  ) => ReturnType<Wallet['connect']>;
  autoConnectWith: (
    name: WalletName,
    ...args: Parameters<Wallet['autoConnect']>
  ) => ReturnType<Wallet['autoConnect']>;
  disconnectWith: (
    name: WalletName,
    ...args: Parameters<Wallet['disconnect']>
  ) => ReturnType<Wallet['disconnect']>;
  watchAssetWith: (
    name: WalletName,
    ...args: Parameters<Wallet['watchAsset']>
  ) => ReturnType<Wallet['watchAsset']>;
};

export type CurrentWalletState = {
  name: WalletName;
  connectionStatus: WalletConnectionStatus;
};

export enum WalletConnectionStatus {
  Untouched = 'Untouched',
  Connected = 'Connected',
  Disconnected = 'Disconnected',
}

export type PluginName<T extends string = string> = Brand<
  T,
  '@web-3wallet/plugin'
>;

export type PluginApiMap = Map<PluginName, PluginApi>;

export type CreatePlugin<
  Options extends object | never = never,
  TPluginApi extends PluginApi = PluginApi,
> = (options?: Options) => Plugin<TPluginApi>;

export interface Plugin<TPluginApi extends PluginApi = PluginApi> {
  name: PluginName;
  dependencies?: PluginName[];
  createApi: (context: PluginContext) => TPluginApi & {
    middlewares?: Middlewares;
  };
}

export type PluginContext = {
  wallet: Wallet;
  dependencies?: unknown[];
};

export type PluginApi = {
  hooks?: Record<string, AnyFn>;
};

export const middlewareNames = [
  'connect',
  'autoConnect',
  'disconnect',
] as const;

export type MiddlewareName = typeof middlewareNames[number];

export type MiddlewareContext = object;

export type Middlewares = Partial<{
  [K in MiddlewareName]: (
    context: MiddlewareContext,
  ) => (next: Wallet[K]) => Wallet[K];
}>;

export type AsyncFetchResult<TData = unknown> = {
  data?: TData;
  error?: Error;
  isLoading: boolean;
};
