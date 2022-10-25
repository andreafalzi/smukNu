import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps, ...appProps }) {
  const getContent = () => {
    if (['/success'].includes(appProps.router.pathname)) return <Component {...pageProps} />;

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  };
  return getContent();
}

export default MyApp;
