import { createContext, useState } from "react";
import { ITemplateContextProps } from "../../pages/types";

export const TemplateContext = createContext<ITemplateContextProps>({
  id: "",
  contents: {},
  template: <></>,
  setId: () => {},
  setContents: () => {},
  setTemplate: () => {},
});

export const TemplateContextProvider = (props: { children: any }) => {
  const [currentId, setCurrentId] = useState("");
  const [currentContents, setCurrentContents] = useState<object>([]);
  const [currentTemplate, setCurrentTemplate] = useState(<></>);

  return (
    <TemplateContext.Provider
      value={{
        id: currentId,
        contents: currentContents,
        template: currentTemplate,
        setId: setCurrentId,
        setContents: setCurrentContents,
        setTemplate: setCurrentTemplate,
      }}
    >
      {props.children}
    </TemplateContext.Provider>
  );
};
