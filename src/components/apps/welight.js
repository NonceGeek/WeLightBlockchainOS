import { urls } from '../../apps.config';

export default function WeLight() {
  const welight = urls.appUrl.welight;

  return (
    <iframe
      src={welight}
      frameBorder='0'
      id='WeLight'
      title='WeLight'
      name='WeLight'
      className='h-full w-full bg-ub-cool-grey'
    ></iframe>
  );
}

export const displayWeLight = () => {
  <WeLight> </WeLight>;
};
