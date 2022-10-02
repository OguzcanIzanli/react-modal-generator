import { createContext, useState } from "react";
import { ITargettingContextProps } from "../../pages/types";

export const TargettingContext = createContext<ITargettingContextProps>({
  device: "",
  setDevice: () => {},
});

export const TargettingContextProvider = (props: { children: any }) => {
  const [currentDevice, setCurrentDevice] = useState("");

  return (
    <TargettingContext.Provider
      value={{
        device: currentDevice,
        setDevice: setCurrentDevice,
      }}
    >
      {props.children}
    </TargettingContext.Provider>
  );
};
