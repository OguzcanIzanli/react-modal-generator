import { useContext } from "react";

import { PositionContext } from "./PositionContext";
export const usePosition = () => useContext(PositionContext);

import { FontSizeContext } from "./FontContext";
export const useFontSize = () => useContext(FontSizeContext);

import { ColorContext } from "./ColorContext";
export const useColor = () => useContext(ColorContext);

import { TemplateContext } from "./TemplateContext";
export const useTemplate = () => useContext(TemplateContext);
