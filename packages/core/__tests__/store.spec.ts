import { type WalletState, createWalletStore } from '../src';
import mockData from './mockData.spec';

describe('store', () => {
  test('store default state', () => {
    const { store } = createWalletStore();
    expect(store.getState()).toEqual({
      chainId: undefined,
      accounts: undefined,
      isConnecting: false,
    });
  });
});

describe('Activation', () => {
  test('startConnection', () => {
    const { store, actions } = createWalletStore();
    actions.startConnection();
    expect(store.getState()).toEqual({
      chainId: undefined,
      accounts: undefined,
      isConnecting: true,
    });
  });

  test('cancelActivation', () => {
    const { store, actions } = createWalletStore();
    const cancelActivation = actions.startConnection();
    expect(store.getState()).toEqual<WalletState>({
      chainId: undefined,
      accounts: undefined,
      isConnecting: true,
    });
    cancelActivation();
    expect(store.getState()).toEqual<WalletState>({
      chainId: undefined,
      accounts: undefined,
      isConnecting: false,
    });
  });
});

describe('update/valid chainId', () => {
  const { store, actions } = createWalletStore();
  const table = mockData.chainIds.map((v) => [v]);
  test.each(table)('chainId: %i', (chainId: number) => {
    actions.update({
      chainId,
    });
    expect(store.getState()).toEqual<WalletState>({
      chainId,
      accounts: undefined,
      isConnecting: false,
    });
  });
});
describe('update/invalid chainId', () => {
  const { actions } = createWalletStore();
  const table = mockData.invalidChainIds.map((v) => [v]);
  test.each(table)('chainId: %i', (chainId: number) => {
    expect(() => {
      actions.update({
        chainId,
      });
    }).toThrow();
  });
});

describe('update/valid accounts', () => {
  test('valid accounts', () => {
    const { store, actions } = createWalletStore();
    const accounts = [...mockData.accounts];
    actions.update({ accounts });
    expect(store.getState()).toEqual<WalletState>({
      chainId: undefined,
      accounts,
      isConnecting: false,
    });
  });
});
describe('update/invalid accounts', () => {
  const { actions } = createWalletStore();
  const table = mockData.invalidChainIds.map((v) => [v]);
  test.each(table)('chainId: %i', (chainId: number) => {
    expect(() => {
      actions.update({
        chainId,
      });
    }).toThrow();
  });
});

describe('update/accounts & chainId', () => {
  test('valid accounts & valid chainId', () => {
    const { store, actions } = createWalletStore();
    const chainId = mockData.chainIds[0];
    const accounts = [...mockData.accounts];
    actions.update({
      chainId,
      accounts,
    });
    expect(store.getState()).toEqual<WalletState>({
      chainId,
      accounts,
      isConnecting: false,
    });
  });

  test('valid chainId & invalid accounts', () => {
    const { actions } = createWalletStore();
    const chainId = mockData.chainIds[0];
    const accounts = [...mockData.invalidAccounts];
    expect(() => {
      actions.update({
        chainId,
        accounts,
      });
    }).toThrow();
  });
  test('invalid chainId & invalid accounts', () => {
    const { actions } = createWalletStore();
    const chainId = mockData.invalidChainIds[0];
    const accounts = [...mockData.invalidAccounts];
    expect(() => {
      actions.update({
        chainId,
        accounts,
      });
    }).toThrow();
  });
});

describe('resetState', () => {
  test('resetState works', () => {
    const { store, actions } = createWalletStore();
    const stateUpdate = {
      chainId: mockData.chainIds[0],
      accounts: [...mockData.accounts],
    };
    actions.update(stateUpdate);
    const cancelActivation = actions.startConnection();
    expect(store.getState()).toEqual<WalletState>({
      ...stateUpdate,
      isConnecting: true,
    });
    cancelActivation();
    expect(store.getState()).toEqual<WalletState>({
      ...stateUpdate,
      isConnecting: false,
    });
    actions.resetState();
    expect(store.getState()).toEqual<WalletState>({
      chainId: undefined,
      accounts: undefined,
      isConnecting: false,
    });
  });
});
