// POSITION
export interface IPositionContextProps {
  position: string;
  clickedPositionButton: string;
  setPosition: (position: string) => void;
  setClickedPositionButton: (clickedPositionButton: string) => void;
}

export interface IPosition {
  position: string;
  clickedPositionButton: string;
}

// SIZE
export interface ISizeContextProps {
  sizeTemp: string;
  clickedSizeButton: string;
  setSizeTemp: (sizeTemp: string) => void;
  setClickedSizeButton: (clickedSizeButton: string) => void;
}

export interface ISize {
  sizeTemp: string;
  clickedSizeButton: string;
}

export interface Size {
  small?: string;
  medium?: string;
  large?: string;
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

// LOGO

export interface ILogoContextProps {
  logo: string;
  image: string;
  setLogo: (logo: string) => void;
  setImage: (image: string) => void;
}

export interface ILogo {
  logo: string;
  image: string;
}

// TEMPLATE
export interface ITemplateContextProps {
  id: string;
  contents: Contents;
  template: JSX.Element;
  trfl: Trfl;
  logoImage: LogoImage;
  size: Size;
  setId: (id: string) => void;
  setContents: (contents: Contents) => void;
  setTemplate: (template: JSX.Element) => void;
  setTrfl: (trfl: Trfl) => void;
  setLogoImage: (logoImage: LogoImage) => void;
  setSize: (size: Size) => void;
}

export interface ITemplate {
  id: string;
  contents: Contents;
  template: JSX.Element;
  trfl: Trfl;
  logoImage: LogoImage;
  size: Size;
}

// TEXT CONTENTS

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

// TEXT BOOLEAN

export interface Trfl {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  p?: boolean;
  buttonCancel?: boolean;
  buttonApply?: boolean;
}

// LOGO AND IMAGE BOOLEAN

export interface LogoImage {
  logo?: boolean;
  image?: boolean;
}

// TARGETTİNG
export interface ITargettingContextProps {
  device: string;
  setDevice: (id: string) => void;
  seconds: string;
  setSeconds: (seconds: string) => void;
  scroll: string;
  setScroll: (scroll: string) => void;
}

// GETCODE
export interface IGetCodeContextProps {
  deviceForBack: string;
  setDeviceForBack: (id: string) => void;
  positionForBack: string;
  setPositionForBack: (id: string) => void;
}
