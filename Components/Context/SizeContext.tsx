import { createContext, useState } from "react";
import { ISizeContextProps } from "../../pages/types";

export const SizeContext = createContext<ISizeContextProps>({
  size: {},
  clickedSizeButton: "",
  setSize: () => {},
  setClickedSizeButton: () => {},
});

export const SizeContextProvider = (props: { children: any }) => {
  const [currentSize, setCurrentSize] = useState<object>({
    width: "w-[462px]",
    height: "h-[426px]",
  });
  const [clickedSizeButton, setClickedSizeButton] = useState("");

  return (
    <SizeContext.Provider
      value={{
        size: currentSize,
        clickedSizeButton: clickedSizeButton,
        setSize: setCurrentSize,
        setClickedSizeButton: setClickedSizeButton,
      }}
    >
      {props.children}
    </SizeContext.Provider>
  );
};
