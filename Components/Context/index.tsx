import { useContext } from "react";

import { PositionContext } from "./PositionContext";
export const usePosition = () => useContext(PositionContext);

import { SizeContext } from "./SizeContext";
export const useSize = () => useContext(SizeContext);

import { ColorContext } from "./ColorContext";
export const useColor = () => useContext(ColorContext);

import { TemplateContext } from "./TemplateContext";
export const useTemplate = () => useContext(TemplateContext);

import { LogoContext } from "./LogoContext";
export const useLogo = () => useContext(LogoContext);

import { TargettingContext } from "./TargettingContext";
export const useTargetting = () => useContext(TargettingContext);

import { GetCodeContext } from "./GetCodeContext";
export const useGetCode = () => useContext(GetCodeContext);
