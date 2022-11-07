import Head from 'next/head';

const Meta = ({ title, description, image, keywords }) => {
  return (
    <Head>
      <meta charSet='UTF-8' />
      <title>Smuk.Nu</title>
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width' />
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta property='og:url' content='https://smuknu.andreafalzi.dev' />
      <meta property='og:type' content='website' />
      <meta property='og:locale' content='en_GB' />
      <link rel='icon' href='/smuknu_logo.png' type='image/x-icon' />
    </Head>
  );
};

Meta.defaultProps = {
  title: 'SmukNu',
  description: 'En hjemmeside, der kun tilbyder dig de bedste skønhedsprodukter rundt omkring i Danmark for at holde din krop og hud naturlig og frisk.',
  image: 'https://i.imgur.com/vLGcENb.jpg',
  keywords: 'smuk, butik',
};

export default Meta;
