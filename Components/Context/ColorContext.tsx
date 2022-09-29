import { createContext, useState } from "react";
import { IColorContextProps } from "../types";

export const ColorContext = createContext<IColorContextProps>({
  color: {},
  clickedColorButton: "",
  setColor: () => {},
  setClickedColorButton: () => {},
});

export const ColorContextProvider = (props: { children: any }) => {
  const [currentColor, setCurrentColor] = useState<object>([{}]);
  const [clickedColorButton, setClickedColorButton] = useState("");

  return (
    <ColorContext.Provider
      value={{
        color: currentColor,
        clickedColorButton: clickedColorButton,
        setColor: setCurrentColor,
        setClickedColorButton: setClickedColorButton,
      }}
    >
      {props.children}
    </ColorContext.Provider>
  );
};
