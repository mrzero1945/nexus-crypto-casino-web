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
          <div style={{ display: 'flex', gap: '12px' }}>
            {/* ... Konten ketika dompet terhubung */}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export  {CustomConnectButton};
