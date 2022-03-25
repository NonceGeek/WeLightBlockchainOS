import { urls } from '../../apps.config';

export default function More() {
  const more = urls.appUrl.more;

  return (
    <iframe
      src={more}
      frameBorder='0'
      id='More'
      title='More'
      name='More'
      className='h-full w-full bg-ub-cool-grey'
    ></iframe>
  );
}

export const displayMore = () => {
  <More> </More>;
};
