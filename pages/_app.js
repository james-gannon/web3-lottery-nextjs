import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider appId="xxxxxxxx" serverUrl="xxxxxxxx">
      <Component {...pageProps} />;
    </MoralisProvider>
  );
}

export default MyApp;
