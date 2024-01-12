import { ConnectButton } from '@rainbow-me/rainbowkit';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useBlackJackContext } from './context/BlackJackContext';




// Fungsi untuk mengirim data akun ke server
async function postAccountData(displayName: string, setSharedBalance: (balance: number) => void) {
  const url = 'http://192.168.1.100:1945/get_bj_save'; // Ganti dengan URL server Anda
  const data = {
    address: displayName
  };

  try {
    const response = await axios.post(url, data);
    setSharedBalance(response.data.balance);

    // Menampilkan response JSON dari server
    console.log('Data posted successfully. Response:', response.data);
    return response.data.balance;
  } catch (error) {
    console.error('Error during axios request:', error);
    setSharedBalance(0);
  }
}



const CustomConnectButton = () => {
  const {setSharedBalance} = useBlackJackContext();
  const mySharedsetNumber = (balance:number)=>{
    setSharedBalance(balance);
  }
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
        useEffect(() => {
          if (account) {
            // Memanggil fungsi ketika akun terhubung
            const the_balance = postAccountData(account.displayName, mySharedsetNumber);
          }
        }, [account]);
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
            <span>{account.displayBalance ? `Balance: ${account.displayBalance}` : ''}</span>
            {/* Tambahkan tombol atau UI lain jika perlu */}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export  {CustomConnectButton};
