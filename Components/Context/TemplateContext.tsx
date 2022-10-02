import { createContext, useState } from "react";
import { ITemplateContextProps } from "../../pages/types";

export const TemplateContext = createContext<ITemplateContextProps>({
  id: "",
  contents: {},
  template: <></>,
  trfl: {},
  logoImage: {},
  setId: () => {},
  setContents: () => {},
  setTemplate: () => {},
  setTrfl: () => {},
  setLogoImage: () => {},
});

export const TemplateContextProvider = (props: { children: any }) => {
  const [currentId, setCurrentId] = useState("");
  const [currentContents, setCurrentContents] = useState<object>([]);
  const [currentTemplate, setCurrentTemplate] = useState(<></>);
  const [currentTrfl, setCurrentTrfl] = useState<object>([]);
  const [currentLogoImage, setCurrentLogoImage] = useState<object>([]);

  return (
    <TemplateContext.Provider
      value={{
        id: currentId,
        contents: currentContents,
        template: currentTemplate,
        trfl: currentTrfl,
        logoImage: currentLogoImage,
        setId: setCurrentId,
        setContents: setCurrentContents,
        setTemplate: setCurrentTemplate,
        setTrfl: setCurrentTrfl,
        setLogoImage: setCurrentLogoImage,
      }}
    >
      {props.children}
    </TemplateContext.Provider>
  );
};
