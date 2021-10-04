import Web3 from 'web3';

function BootingScreen(props) {
  const loginWithMetaMask = () => {
    props.loginWithOAuth(true);
  };

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      loginWithMetaMask();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        'Non-Ethereum browser detected. You should consider trying MetaMask!',
      );
    }
  };

  return (
    <div
      style={
        props.visible || props.isShutDown
          ? { zIndex: '100' }
          : { zIndex: '-20' }
      }
      className={
        (props.visible || props.isShutDown
          ? ' visible opacity-100'
          : ' invisible opacity-0 ') +
        ' absolute duration-500 select-none flex flex-col justify-around items-center top-0 right-0 overflow-hidden m-0 p-0 h-screen w-screen bg-black'
      }
    >
      <img
        className='md:w-1/4 w-1/2'
        src='./themes/Yaru/status/cof_orange_hex.svg'
        alt='Ubuntu Logo'
      />
      <div
        className='w-10 h-10 flex justify-center items-center rounded-full outline-none cursor-pointer'
        onClick={props.turnOn}
      >
        {props.isShutDown ? (
          <div className='bg-white rounded-full flex justify-center items-center w-10 h-10 hover:bg-gray-300'>
            <img
              className='w-8'
              src='./themes/Yaru/status/power-button.svg'
              alt='Power Button'
            />
          </div>
        ) : (
          <img
            className={' w-10 ' + (props.visible ? ' animate-spin ' : '')}
            src='./themes/Yaru/status/process-working-symbolic.svg'
            alt='Ubuntu Process Symbol'
          />
        )}
      </div>
      {props.isShutDown ? (
        <></>
      ) : (
        <div className='mb-4'>
          <div
            className='flex items-center px-5 py-2 mb-1 cursor-pointer'
            style={{
              backgroundColor: 'rgba(205,217,229,0.7)',
              color: '#cdd9e5',
            }}
          >
            <img
              className='w-10'
              src='/images/logos/github.png'
              alt='github logo'
            />
            <div className='px-5'>Login with GitHub</div>
          </div>
          <div
            onClick={() => loadWeb3()}
            className='flex bg-white items-center px-5 py-2 mb-1 cursor-pointer'
          >
            <img
              className='w-10'
              src='/images/logos/metamask.svg'
              alt='metamask logo'
            />
            <div className='px-5'>Login with MetaMask</div>
          </div>
          <div className='text-white py-2'>
            <div className='text-center'>
              Or press "Enter" to login in {props.remainingSeconds} seconds
            </div>
          </div>
        </div>
      )}

      <img
        className='md:w-1/5 w-1/2'
        src='./themes/Yaru/status/ubuntu_white_hex.svg'
        alt='Ubuntu Name'
      />
    </div>
  );
}

export default BootingScreen;
