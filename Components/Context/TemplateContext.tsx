import { createContext, useState } from "react";
import { ITemplateContextProps } from "../../pages/types";

export const TemplateContext = createContext<ITemplateContextProps>({
  id: "",
  contents: {},
  template: <></>,
  trfl: {},
  logoImage: {},
  size: {},
  setId: () => {},
  setContents: () => {},
  setTemplate: () => {},
  setTrfl: () => {},
  setLogoImage: () => {},
  setSize: () => {},
});

export const TemplateContextProvider = (props: { children: any }) => {
  const [currentId, setCurrentId] = useState("");
  const [currentContents, setCurrentContents] = useState<object>([]);
  const [currentTemplate, setCurrentTemplate] = useState(<></>);
  const [currentTrfl, setCurrentTrfl] = useState<object>([]);
  const [currentLogoImage, setCurrentLogoImage] = useState<object>([]);
  const [currentSize, setCurrentSize] = useState<object>([]);

  return (
    <TemplateContext.Provider
      value={{
        id: currentId,
        contents: currentContents,
        template: currentTemplate,
        trfl: currentTrfl,
        logoImage: currentLogoImage,
        size: currentSize,
        setId: setCurrentId,
        setContents: setCurrentContents,
        setTemplate: setCurrentTemplate,
        setTrfl: setCurrentTrfl,
        setLogoImage: setCurrentLogoImage,
        setSize: setCurrentSize,
      }}
    >
      {props.children}
    </TemplateContext.Provider>
  );
};
