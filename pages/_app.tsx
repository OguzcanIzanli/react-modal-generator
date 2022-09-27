import "../styles/globals.css";
import type { AppProps } from "next/app";
import Template1 from "./template1";
import Template2 from "./template2";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Template1 /> */}
      {/* <Template2 /> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
