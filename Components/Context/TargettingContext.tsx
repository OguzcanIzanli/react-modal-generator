import { createContext, useState } from "react";
import { ITargettingContextProps } from "../../pages/types";

export const TargettingContext = createContext<ITargettingContextProps>({
  device: "",
  setDevice: () => {},
  seconds: "",
  setSeconds: () => {},
  scroll: "",
  setScroll: () => {},
});

export const TargettingContextProvider = (props: { children: any }) => {
  const [currentDevice, setCurrentDevice] = useState("");
  const [currentSeconds, setCurrentSeconds] = useState("");
  const [currentScroll, setCurrentScroll] = useState("");

  return (
    <TargettingContext.Provider
      value={{
        device: currentDevice,
        setDevice: setCurrentDevice,
        seconds: currentSeconds,
        setSeconds: setCurrentSeconds,
        scroll: currentScroll,
        setScroll: setCurrentScroll,
      }}
    >
      {props.children}
    </TargettingContext.Provider>
  );
};
