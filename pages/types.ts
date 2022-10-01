// TEMPLATE
export interface ITemplateContextProps {
  id: string;
  contents: Contents;
  template: JSX.Element;
  setId: (id: string) => void;
  setContents: (contents: Contents) => void;
  setTemplate: (template: JSX.Element) => void;
}

export interface ITemplate {
  id: string;
  contents: Contents;
  template: JSX.Element;
}

export interface Contents {
  h1?: string;
  h2?: string;
  h3?: string;
  h4?: string;
  h5?: string;
  h6?: string;
  p?: string;
  buttonCancel?: string;
  buttonApply?: string;
}

// POSITION
export interface IPosition {
  position: string;
  clickedPositionButton: string;
}

// FONTSIZE
export interface IFontSizeContextProps {
  fontSize: FontSize;
  clickedFontSizeButton: string;
  setFontSize: (fontSize: FontSize) => void;
  setClickedFontSizeButton: (clickedFontSizeButton: string) => void;
}

export interface IFontSize {
  fontSize: FontSize;
  clickedFontSizeButton: string;
}

export interface FontSize {
  h1?: string;
  h2?: string;
}

// COLOR
export interface IColorContextProps {
  color: Color;
  clickedColorButton: string;
  setColor: (color: Color) => void;
  setClickedColorButton: (clickedColorButton: string) => void;
}

export interface IColor {
  color: Color;
  clickedColorButton: string;
}

export interface Color {
  bgcolor?: string;
  textcolor?: string;
  buttoncolor?: string;
}
