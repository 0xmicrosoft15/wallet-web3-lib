import type { Actions, Connector } from '@web3-wallet/core';

import type { DeFiWalletProviderOptions } from './detectProvider';
import { ExtensionConnector } from './ExtensionConnector';
import { isMobile } from './isMobile';
import { MobileConnector } from './MobileConnector';

export const getDeFiWallet = (
  actions: Actions,
  options: {
    extension: DeFiWalletProviderOptions;
  },
  onError?: Connector['onError'],
): MobileConnector | ExtensionConnector => {
  if (isMobile()) {
    return new MobileConnector(actions, onError);
  } else {
    return new ExtensionConnector(actions, options.extension, onError);
  }
};
