// POSITION
export interface IPosition {
  position: string;
  clickedPositionButton: string;
}

export interface IFontSizeContextProps {
  fontSize: FontSize;
  clickedFontSizeButton: string;
  setFontSize: (fontSize: FontSize) => void;
  setClickedFontSizeButton: (clickedFontSizeButton: string) => void;
}

// FONTSIZE
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
