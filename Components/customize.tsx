import styles from "../styles/customize.module.scss";
import { useState, useEffect } from "react";

import { useFontSize } from "./Context";
import { IFontSize } from "./types";

import { usePosition } from "./Context";
import { IPosition } from "./types";

import { useColor } from "./Context";
import { IColor } from "./types";

function Customize({ template }: { template: JSX.Element | undefined }) {
  const [fontSizeSelect, setFontSizeSelect] = useState("");
  const [positionSelect, setPositionSelect] = useState("5");
  const [colorSelect, setColorSelect] = useState("");

  const { setFontSize } = useFontSize();
  const { setPosition } = usePosition();
  const { setColor } = useColor();

  useEffect(() => {
    // Modal Default Settings
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

  // FONT SIZE
  const selectedFontSize = (data: IFontSize) => {
    setFontSize(data.fontSize);
    setFontSizeSelect(data.clickedFontSizeButton);
  };

  // POSITION
  const selectedPosition = (data: IPosition) => {
    setPosition(data.position);
    setPositionSelect(data.clickedPositionButton);
  };

  // // COLOR
  const selectedColor = (data: IColor) => {
    setColor(data.color);
    setColorSelect(data.clickedColorButton);
  };

  return (
    // CONTAINER -START
    <div className={styles.container}>
      {/* COLUMN 4 - START */}
      <div className={styles.col4}>
        {/* APPEARANCE - START */}
        <div>
          <div className={styles.selectionTitle}>
            <div>2</div>

            <h2>
              Appearance <span> (Size, colors, logo)</span>
            </h2>
          </div>

          {/* FONT SIZE SELECTION*/}
          <p>Size</p>

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

          {/* POSITION SELECTION */}
          <p>Position</p>

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
                  position:
                    "translate-x-0 right-full translate-y-0 top-full fixed",
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
                  position:
                    "translate-x-1/2 left-1/2 translate-y-0 top-full fixed",
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
                  position:
                    "translate-x-0 left-full translate-y-0 top-full fixed",
                  clickedPositionButton: "9",
                })
              }
            ></button>
          </div>

          {/* COLOR SELECTION*/}
          <p>Colors</p>

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
          <p>Upload Logo</p>
        </div>
        {/* APPEARANCE - END*/}

        <div>
          <div className={styles.selectionTitle}>
            <div>3</div>
            <h2>Content</h2>
          </div>
        </div>

        <div>
          <div className={styles.selectionTitle}>
            <div>4</div>
            <h2>Targeting Rules</h2>
          </div>
        </div>

        <div>
          <div className={styles.selectionTitle}>
            <div>5</div>
            <h2>Settings and Code</h2>
          </div>
        </div>
      </div>
      {/* COLUMN 4 - END */}

      {/* COLUMN 8 - START */}
      <div className={styles.col8}>{template}</div>
      {/* COLUMN 8 - END */}
    </div>
    // CONTAINER - END
  );
}

export default Customize;
