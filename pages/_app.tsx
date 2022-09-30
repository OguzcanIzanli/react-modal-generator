import "../styles/globals.css";
import type { AppProps } from "next/app";
import { FontSizeContextProvider } from "../Components/Context/FontContext";
import { PositionContextProvider } from "../Components/Context/PositionContext";
import { ColorContextProvider } from "../Components/Context/ColorContext";
<script src="https://unpkg.com/flowbite@1.4.5/dist/flowbite.js"></script>;
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ColorContextProvider>
      <PositionContextProvider>
        <FontSizeContextProvider>
          <Component {...pageProps} />
        </FontSizeContextProvider>
      </PositionContextProvider>
    </ColorContextProvider>
  );
}

export default MyApp;
