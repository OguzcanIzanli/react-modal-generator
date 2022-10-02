import { createContext, useState } from "react";
import { ISizeContextProps } from "../../pages/types";

export const SizeContext = createContext<ISizeContextProps>({
  sizeTemp: "",
  clickedSizeButton: "",
  setSizeTemp: () => {},
  setClickedSizeButton: () => {},
});

export const SizeContextProvider = (props: { children: any }) => {
  const [currentSizeTemp, setCurrentSizeTemp] = useState("");
  const [clickedSizeButton, setClickedSizeButton] = useState("");

  return (
    <SizeContext.Provider
      value={{
        sizeTemp: currentSizeTemp,
        clickedSizeButton: clickedSizeButton,
        setSizeTemp: setCurrentSizeTemp,
        setClickedSizeButton: setClickedSizeButton,
      }}
    >
      {props.children}
    </SizeContext.Provider>
  );
};
