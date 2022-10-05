import styles from "../styles/appearance.module.scss";
import { useState, useEffect } from "react";
import LogoDropzone from "./logoDropzone";

import {
  useSize,
  usePosition,
  useTemplate,
  useGetCode,
  useColor,
} from "../Components/Context";
import { ISize } from "./types";

import { IPosition } from "./types";

import { IColor } from "./types";

function Appearance() {
  const [sizeSelect, setSizeSelect] = useState("medium");
  const [positionSelect, setPositionSelect] = useState("5");
  const [colorSelect, setColorSelect] = useState("");

  const { setSizeTemp } = useSize();
  const { setColor } = useColor();
  const { logoImage } = useTemplate();

  // const { setPositionForBack } = useGetCode();
  const { setPosition } = usePosition();

  // Size
  const selectedSize = (data: ISize) => {
    setSizeTemp(data.sizeTemp);
    setSizeSelect(data.clickedSizeButton);
  };

  // Position
  const selectedPosition = (data: IPosition) => {
    setPosition(data.position);
    setPositionSelect(data.clickedPositionButton);
  };

  // Color
  const selectedColor = (data: IColor) => {
    setColor(data.color);
    setColorSelect(data.clickedColorButton);
  };

  return (
    <div className={styles.appearance}>
      <div className={styles.titleContainer}>
        <div className={styles.titleNumber}>2</div>

        <h1 className={styles.title}>
          Appearance <span> (Size, colors, logo)</span>
        </h1>
      </div>

      {/*Size */}
      <p className={styles.subTitles}>Size</p>

      <div className={styles.sizeButtonsContainer}>
        <button
          className={`${
            sizeSelect === "small" ? styles.sizeSelectClicked : ""
          }`}
          onClick={() =>
            selectedSize({
              sizeTemp: "small",
              clickedSizeButton: "small",
            })
          }
        >
          small
        </button>

        <button
          className={`${
            sizeSelect === "medium" ? styles.sizeSelectClicked : ""
          }`}
          onClick={() =>
            selectedSize({
              sizeTemp: "medium",
              clickedSizeButton: "medium",
            })
          }
        >
          medium
        </button>

        <button
          className={`${
            sizeSelect === "large" ? styles.sizeSelectClicked : ""
          }`}
          onClick={() =>
            selectedSize({
              sizeTemp: "large",
              clickedSizeButton: "large",
            })
          }
        >
          large
        </button>
      </div>

      {/* Position */}
      <p className={styles.subTitles}>Position</p>

      <div className={styles.positionButtonsContainer}>
        <button
          className={`${
            positionSelect === "1" ? styles.positionSelectClicked : ""
          }`}
          onClick={() =>
            selectedPosition({
              position: "top-0 left-0 fixed",
              clickedPositionButton: "1",
            })
          }
        ></button>
        <button
          id="1"
          className={`${
            positionSelect === "2" ? styles.positionSelectClicked : ""
          }`}
          onClick={() =>
            selectedPosition({
              position: "top-0 fixed",
              clickedPositionButton: "2",
            })
          }
        ></button>
        <button
          className={`${
            positionSelect === "3" ? styles.positionSelectClicked : ""
          }`}
          onClick={() =>
            selectedPosition({
              position: "top-0 right-0 fixed",
              clickedPositionButton: "3",
            })
          }
        ></button>
        <button
          className={`${
            positionSelect === "4" ? styles.positionSelectClicked : ""
          }`}
          onClick={() =>
            selectedPosition({
              position: "left-0 top-1/4 fixed",
              clickedPositionButton: "4",
            })
          }
        ></button>
        <button
          className={`${
            positionSelect === "5" ? styles.positionSelectClicked : ""
          }`}
          onClick={() =>
            selectedPosition({
              position: "right-1/4 top-1/4 fixed",
              clickedPositionButton: "5",
            })
          }
        ></button>
        <button
          className={`${
            positionSelect === "6" ? styles.positionSelectClicked : ""
          }`}
          onClick={() =>
            selectedPosition({
              position: "right-0 top-1/4 fixed",
              clickedPositionButton: "6",
            })
          }
        ></button>
        <button
          className={`${
            positionSelect === "7" ? styles.positionSelectClicked : ""
          }`}
          onClick={() =>
            selectedPosition({
              position: "left-0 bottom-0 fixed",
              clickedPositionButton: "7",
            })
          }
        ></button>
        <button
          className={`${
            positionSelect === "8" ? styles.positionSelectClicked : ""
          }`}
          onClick={() =>
            selectedPosition({
              position: "bottom-0 fixed",
              clickedPositionButton: "8",
            })
          }
        ></button>
        <button
          className={`${
            positionSelect === "9" ? styles.positionSelectClicked : ""
          }`}
          onClick={() =>
            selectedPosition({
              position: "bottom-0 right-0 fixed",
              clickedPositionButton: "9",
            })
          }
        ></button>
      </div>

      {/* Color */}
      <p className={styles.subTitles}>Colors</p>

      <div className={styles.colorButtonsContainer}>
        <button
          className={`${
            colorSelect === "black" ? styles.colorSelectClicked : ""
          }`}
          onClick={() =>
            selectedColor({
              color: {
                bgcolor: "bg-neutral-900",
                textcolor: "border-neutral-900",
                buttoncolor: "text-white",
              },
              clickedColorButton: "black",
            })
          }
        ></button>
        <button
          className={`${
            colorSelect === "orange" ? styles.colorSelectClicked : ""
          }`}
          onClick={() =>
            selectedColor({
              color: {
                bgcolor: "bg-orange-600",
                textcolor: "border-orange-600",
                buttoncolor: "text-white",
              },
              clickedColorButton: "orange",
            })
          }
        ></button>
        <button
          className={`${
            colorSelect === "gray" ? styles.colorSelectClicked : ""
          }`}
          onClick={() =>
            selectedColor({
              color: {
                bgcolor: "bg-gray-600",
                textcolor: "border-gray-600",
                buttoncolor: "text-white",
              },
              clickedColorButton: "gray",
            })
          }
        ></button>
        <button
          className={`${
            colorSelect === "lightGray" ? styles.colorSelectClicked : ""
          }`}
          onClick={() =>
            selectedColor({
              color: {
                bgcolor: "bg-gray-300",
                textcolor: "border-gray-300",
                buttoncolor: "text-black",
              },
              clickedColorButton: "lightGray",
            })
          }
        ></button>
        <button
          className={`${
            colorSelect === "white" ? styles.colorSelectClicked : ""
          }`}
          onClick={() =>
            selectedColor({
              color: {
                bgcolor: "bg-slate-50",
                textcolor: "border-slate-50",
                buttoncolor: "text-black",
              },
              clickedColorButton: "white",
            })
          }
        ></button>
      </div>

      {/* Logo Upload */}
      {logoImage.logo ? <LogoDropzone /> : ""}
    </div>
  );
}

export default Appearance;
