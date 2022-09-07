import { Select } from '@chakra-ui/react';
import type { Wallet, WalletName } from '@web3-wallet/react';

export const WalletSelect = ({
  wallets,
  selectedWalletName,
  setSelectedWallet,
}: {
  wallets: Wallet[];
  selectedWalletName: WalletName;
  setSelectedWallet: (walletName: WalletName) => void;
}) => {
  return (
    <Select
      value={selectedWalletName}
      onChange={(event) => {
        setSelectedWallet(event.target.value as WalletName);
      }}
    >
      {wallets.map((wallet) => (
        <option key={wallet.name} value={wallet.name}>
          {wallet.name}
        </option>
      ))}
    </Select>
  );
};
