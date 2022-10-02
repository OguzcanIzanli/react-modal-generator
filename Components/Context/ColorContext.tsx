import { createContext, useState } from "react";
import { IColorContextProps } from "../../pages/types";

export const ColorContext = createContext<IColorContextProps>({
  color: {},
  clickedColorButton: "",
  setColor: () => {},
  setClickedColorButton: () => {},
});

export const ColorContextProvider = (props: { children: any }) => {
  const [currentColor, setCurrentColor] = useState<object>({
    bgcolor: "bg-purple-600",
    textcolor: "text-black",
    buttoncolor: "text-white",
    clickedColorButton: "",
  });

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
