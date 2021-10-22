import { urls } from '../../apps.config';

export default function supplyChain() {
  const supplyChain = urls.appUrl.supplyChain;

  return (
    <iframe
      src={supplyChain}
      frameBorder='0'
      id='WeLight'
      title='WeLight'
      name='WeLight'
      className='h-full w-full bg-ub-cool-grey'
    ></iframe>
  );
}

export const displaySupplyChain = () => {
  <supplyChain> </supplyChain>;
};
