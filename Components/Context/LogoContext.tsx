import { createContext, useState } from "react";
import { ILogoContextProps } from "../../pages/types";

export const LogoContext = createContext<ILogoContextProps>({
  logo: "",
  image: "",
  setLogo: () => {},
  setImage: () => {},
});

export const LogoContextProvider = (props: { children: any }) => {
  const [currentLogo, setCurrentLogo] = useState("/bolt.svg");
  const [currentImage, setCurrentImage] = useState("/cover.png");

  return (
    <LogoContext.Provider
      value={{
        logo: currentLogo,
        image: currentImage,
        setLogo: setCurrentLogo,
        setImage: setCurrentImage,
      }}
    >
      {props.children}
    </LogoContext.Provider>
  );
};
