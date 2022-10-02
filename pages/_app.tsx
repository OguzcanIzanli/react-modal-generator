import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SizeContextProvider } from "../Components/Context/SizeContext";
import { PositionContextProvider } from "../Components/Context/PositionContext";
import { ColorContextProvider } from "../Components/Context/ColorContext";
import { TemplateContextProvider } from "../Components/Context/TemplateContext";
import { LogoContextProvider } from "../Components/Context/LogoContext";
import { TargettingContextProvider } from "../Components/Context/TargettingContext";
import { GetCodeContextProvider } from "../Components/Context/GetCodeContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GetCodeContextProvider>
      <TargettingContextProvider>
        <LogoContextProvider>
          <TemplateContextProvider>
            <ColorContextProvider>
              <PositionContextProvider>
                <SizeContextProvider>
                  <Component {...pageProps} />
                </SizeContextProvider>
              </PositionContextProvider>
            </ColorContextProvider>
          </TemplateContextProvider>
        </LogoContextProvider>
      </TargettingContextProvider>
    </GetCodeContextProvider>
  );
}

export default MyApp;
