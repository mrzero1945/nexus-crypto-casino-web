import { ConnectButton } from '@rainbow-me/rainbowkit';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomConnectButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== 'loading';
        const connected = ready && account && chain && (!authenticationStatus || authenticationStatus === 'authenticated');

        if (!connected) {
          // Tombol untuk menghubungkan dompet
          return (
            <button className='btn text-white' onClick={openConnectModal} type="button" style={{ 
              borderRadius: '9px', 
              background: '#59BE43', 
              justifyContent: "center", 
              display: "flex", 
              alignItems: "center" 
            }}>
              Connect Wallet
            </button>
          );
        }

        if (chain.unsupported) {
          // Tombol jika jaringan salah
          return (
            <button onClick={openChainModal} type="button">
              Wrong network
            </button>
          );
        }

        // UI ketika dompet sudah terhubung
        return (
          <div className='text-white mt-2' style={{ display: 'flex', gap: '12px' }}>
            <span >{account.displayName}</span>
            <span>{account.displayBalance ? `Saldo: ${account.displayBalance}` : ''}</span>
            {/* Tambahkan tombol atau UI lain jika perlu */}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export  {CustomConnectButton};
