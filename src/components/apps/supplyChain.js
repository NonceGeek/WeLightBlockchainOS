import { urls } from '../../apps.config';

export default function supplyChain() {

  return (
    // <iframe
    //   src={supplyChain}
    //   frameBorder='0'
    //   id='supplyChain'
    //   title='supplyChain'
    //   name='supplyChain'
    //   className='h-full w-full bg-ub-cool-grey'
    // ></iframe>
    <a className='h-full w-full block' target="_blank" rel="noreferrer" href={urls.appUrl.supplyChain}> </a>
  );
}

export const displaySupplyChain = () => {
  <supplyChain> </supplyChain>
};
