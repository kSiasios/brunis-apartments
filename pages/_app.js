import "../styles/globals.css";
import "../styles/navbar.css";
import "../styles/authentication.css";

import enFile from "../public/lang/en.json";
import elFile from "../public/lang/el.json";

import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";

const messages = {
  en: enFile,
  el: elFile,
};

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
