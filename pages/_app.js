import Head from "next/head";

import { CouponProvider } from "../src/context/CouponContext";
import { GlobalProvider } from "../src/context/GlobalContext";
import Header from "../src/components/core/Header";
import FooterNav from "../src/components/core/FooterNav";
// import App from 'next/app'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <title>boupon</title>
      </Head>
      <GlobalProvider>
        <CouponProvider>
          <Header />
          <Component {...pageProps} />
          <FooterNav />
        </CouponProvider>
      </GlobalProvider>
    </>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
