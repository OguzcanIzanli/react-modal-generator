import styles from "../styles/appearance.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";

import { useFontSize } from "../Components/Context";
import { IFontSize } from "./types";

import { usePosition } from "../Components/Context";
import { IPosition } from "./types";

import { useColor } from "../Components/Context";
import { IColor } from "./types";

function Appearance() {
  const [fontSizeSelect, setFontSizeSelect] = useState("");
  const [positionSelect, setPositionSelect] = useState("5");
  const [colorSelect, setColorSelect] = useState("");

  const { setFontSize } = useFontSize();
  const { setPosition } = usePosition();
  const { setColor } = useColor();

  // Modal Default Settings
  useEffect(() => {
    selectedFontSize({
      fontSize: {
        h1: "text-4xl",
        h2: "text-xl",
      },
      clickedFontSizeButton: "medium",
    });
    selectedColor({
      color: {
        bgcolor: "bg-purple-600",
        textcolor: "text-black",
        buttoncolor: "text-white",
      },
      clickedColorButton: "",
    });
  }, []);

  // Font Size
  const selectedFontSize = (data: IFontSize) => {
    setFontSize(data.fontSize);
    setFontSizeSelect(data.clickedFontSizeButton);
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

      {/* FONT SIZE */}
      <p className={styles.subTitles}>Size</p>

      <div className={styles.sizeButtonsContainer}>
        <button
          className={`${
            fontSizeSelect === "small" ? styles.fontSizeSelectClicked : ""
          }`}
          onClick={() =>
            selectedFontSize({
              fontSize: {
                h1: "text-3xl",
                h2: "text-lg",
              },
              clickedFontSizeButton: "small",
            })
          }
        >
          small
        </button>

        <button
          className={`${
            fontSizeSelect === "medium" ? styles.fontSizeSelectClicked : ""
          }`}
          onClick={() =>
            selectedFontSize({
              fontSize: {
                h1: "text-4xl",
                h2: "text-xl",
              },
              clickedFontSizeButton: "medium",
            })
          }
        >
          medium
        </button>

        <button
          className={`${
            fontSizeSelect === "large" ? styles.fontSizeSelectClicked : ""
          }`}
          onClick={() =>
            selectedFontSize({
              fontSize: {
                h1: "text-5xl",
                h2: "text-2xl",
              },
              clickedFontSizeButton: "large",
            })
          }
        >
          large
        </button>
      </div>

      {/* POSITION */}
      <p className={styles.subTitles}>Position</p>

      <div className={styles.positionButtonsContainer}>
        <button
          className={`${
            positionSelect === "1" ? styles.positionSelectClicked : ""
          }`}
          onClick={() =>
            selectedPosition({
              position:
                "translate-x-0 right-full translate-y-0 bottom-full fixed",
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
              position:
                "translate-x-1/2 left-1/2 translate-y-0 bottom-full fixed",
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
              position:
                "translate-x-0 left-full translate-y-0 bottom-full fixed",
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
              position:
                "translate-x-0 right-full -translate-y-1/2 bottom-1/2 fixed",
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
              position:
                "translate-x-1/2 left-1/2 -translate-y-1/2 bottom-1/2 fixed",
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
              position:
                "translate-x-0 left-full -translate-y-1/2 bottom-1/2 fixed",
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
              position: "translate-x-0 right-full translate-y-0 top-full fixed",
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
              position: "translate-x-1/2 left-1/2 translate-y-0 top-full fixed",
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
              position: "translate-x-0 left-full translate-y-0 top-full fixed",
              clickedPositionButton: "9",
            })
          }
        ></button>
      </div>

      {/* COLOR */}
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
                textcolor: "text-black",
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
                textcolor: "text-black",
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
                textcolor: "text-black",
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
                textcolor: "text-black",
                buttoncolor: "text-white",
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
                textcolor: "text-black",
                buttoncolor: "text-white",
              },
              clickedColorButton: "white",
            })
          }
        ></button>
      </div>

      {/* LOGO UPLOAD */}
      <p className={styles.subTitles}>Upload Logo</p>
      <div className={styles.uploadBox}>
        <div className={styles.uploadLogoBox}>
          <Image src="/imgLogo.svg" height={36} width={36} />
        </div>
        <div>
          <Image src="/uploadLogo.svg" width={18} height={18} />
          <p>
            Drop your image here or <span>upload</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Appearance;
