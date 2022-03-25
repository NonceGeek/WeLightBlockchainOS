import { urls } from '../../apps.config';

export default function OtherApps() {
  const otherApps = urls.appUrl.otherApps;

  return (
    <iframe
      src={otherApps}
      frameBorder='0'
      id='OtherApps'
      title='OtherApps'
      name='OtherApps'
      className='h-full w-full bg-ub-cool-grey'
    ></iframe>
  );
}

export const displayOtherApps = () => {
  <OtherApps> </OtherApps>;
};
