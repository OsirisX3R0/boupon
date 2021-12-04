import { CouponProvider } from "../src/context/CouponContext";
import { GlobalProvider } from "../src/context/GlobalContext";
import Header from "../src/components/core/header/Header";
import FooterNav from "../src/components/core/footer/FooterNav";
// import App from 'next/app'

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <CouponProvider>
        <Header />
        <Component {...pageProps} />
        <FooterNav />
      </CouponProvider>
    </GlobalProvider>
  );
}

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
