import { createContext, useState } from "react";

type IPositionContextProps = {
  position: string;
  clickedPositionButton: string;
  setPosition: (position: string) => void;
  setClickedPositionButton: (clickedPositionButton: string) => void;
};

export const PositionContext = createContext<IPositionContextProps>({
  position: "",
  clickedPositionButton: "",
  setPosition: () => {},
  setClickedPositionButton: () => {},
});

export const PositionContextProvider = (props: { children: any }) => {
  const [currentPosition, setCurrentPosition] = useState("");
  const [clickedPositionButton, setClickedPositionButton] = useState("");

  return (
    <PositionContext.Provider
      value={{
        position: currentPosition,
        clickedPositionButton: clickedPositionButton,
        setPosition: setCurrentPosition,
        setClickedPositionButton: setClickedPositionButton,
      }}
    >
      {props.children}
    </PositionContext.Provider>
  );
};
