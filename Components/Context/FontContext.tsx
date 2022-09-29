import { createContext, useState } from "react";
import { IFontSizeContextProps } from "../types";

export const FontSizeContext = createContext<IFontSizeContextProps>({
  fontSize: {},
  clickedFontSizeButton: "",
  setFontSize: () => {},
  setClickedFontSizeButton: () => {},
});

export const FontSizeContextProvider = (props: { children: any }) => {
  const [currentFontSize, setCurrentFontSize] = useState<object>([{}]);
  const [clickedFontSizeButton, setClickedFontSizeButton] = useState("");

  return (
    <FontSizeContext.Provider
      value={{
        fontSize: currentFontSize,
        clickedFontSizeButton: clickedFontSizeButton,
        setFontSize: setCurrentFontSize,
        setClickedFontSizeButton: setClickedFontSizeButton,
      }}
    >
      {props.children}
    </FontSizeContext.Provider>
  );
};
