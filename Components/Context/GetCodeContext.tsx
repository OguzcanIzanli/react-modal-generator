import { createContext, useState } from "react";
import { IGetCodeContextProps } from "../../pages/types";

export const GetCodeContext = createContext<IGetCodeContextProps>({
  deviceForBack: "",
  setDeviceForBack: () => {},
  positionForBack: "",
  setPositionForBack: () => {},
});

export const GetCodeContextProvider = (props: { children: any }) => {
  const [currentDeviceForBack, setCurrentDeviceForBack] = useState("");
  const [currentPositionForBack, setCurrentPositionForBack] = useState("");

  return (
    <GetCodeContext.Provider
      value={{
        deviceForBack: currentDeviceForBack,
        setDeviceForBack: setCurrentDeviceForBack,
        positionForBack: currentPositionForBack,
        setPositionForBack: setCurrentPositionForBack,
      }}
    >
      {props.children}
    </GetCodeContext.Provider>
  );
};
