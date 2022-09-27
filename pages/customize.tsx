import styles from "../styles/customize.module.scss";
import { useState } from "react";

function Customize({ modal }: { modal: JSX.Element | undefined }) {
  const [sizeSelect, setSizeSelect] = useState("2");
  const [positionSelect, setPositionSelect] = useState("5");
  const [colorSelect, setColorSelect] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.col4}>
        <div>
          <div className={styles.selectionStep}>
            <div>2</div>

            <h2>
              Appearance <span> (Size, colors, logo)</span>
            </h2>
          </div>

          <p>Size</p>

          <div className={styles.sizeButtonsContainer}>
            <button
              className={`${
                sizeSelect === "1" ? styles.sizeSelectClicked : ""
              }`}
              onClick={() => setSizeSelect("1")}
            >
              small
            </button>

            <button
              className={`${
                sizeSelect === "2" ? styles.sizeSelectClicked : ""
              }`}
              onClick={() => setSizeSelect("2")}
            >
              medium
            </button>

            <button
              className={`${
                sizeSelect === "3" ? styles.sizeSelectClicked : ""
              }`}
              onClick={() => setSizeSelect("3")}
            >
              large
            </button>
          </div>

          <p>Position</p>

          <div className={styles.positionButtonsContainer}>
            <button
              className={`${
                positionSelect === "1" ? styles.positionSelectClicked : ""
              }`}
              onClick={() => setPositionSelect("1")}
            ></button>
            <button
              className={`${
                positionSelect === "2" ? styles.positionSelectClicked : ""
              }`}
              onClick={() => setPositionSelect("2")}
            ></button>
            <button
              className={`${
                positionSelect === "3" ? styles.positionSelectClicked : ""
              }`}
              onClick={() => setPositionSelect("3")}
            ></button>
            <button
              className={`${
                positionSelect === "4" ? styles.positionSelectClicked : ""
              }`}
              onClick={() => setPositionSelect("4")}
            ></button>
            <button
              className={`${
                positionSelect === "5" ? styles.positionSelectClicked : ""
              }`}
              onClick={() => setPositionSelect("5")}
            ></button>
            <button
              className={`${
                positionSelect === "6" ? styles.positionSelectClicked : ""
              }`}
              onClick={() => setPositionSelect("6")}
            ></button>
            <button
              className={`${
                positionSelect === "7" ? styles.positionSelectClicked : ""
              }`}
              onClick={() => setPositionSelect("7")}
            ></button>
            <button
              className={`${
                positionSelect === "8" ? styles.positionSelectClicked : ""
              }`}
              onClick={() => setPositionSelect("8")}
            ></button>
            <button
              className={`${
                positionSelect === "9" ? styles.positionSelectClicked : ""
              }`}
              onClick={() => setPositionSelect("9")}
            ></button>
          </div>

          <p>Colors</p>

          <div className={styles.colorButtonsContainer}>
            <button
              className={`${
                colorSelect === "1" ? styles.colorSelectClicked : ""
              }`}
              onClick={() => setColorSelect("1")}
            ></button>
            <button
              className={`${
                colorSelect === "2" ? styles.colorSelectClicked : ""
              }`}
              onClick={() => setColorSelect("2")}
            ></button>
            <button
              className={`${
                colorSelect === "3" ? styles.colorSelectClicked : ""
              }`}
              onClick={() => setColorSelect("3")}
            ></button>
            <button
              className={`${
                colorSelect === "4" ? styles.colorSelectClicked : ""
              }`}
              onClick={() => setColorSelect("4")}
            ></button>
            <button
              className={`${
                colorSelect === "5" ? styles.colorSelectClicked : ""
              }`}
              onClick={() => setColorSelect("5")}
            ></button>
          </div>

          <p>Upload Logo</p>
        </div>

        <div>
          <div className={styles.selectionStep}>
            <div>3</div>
            <h2>Content</h2>
          </div>
        </div>

        <div>
          <div className={styles.selectionStep}>
            <div>4</div>
            <h2>Targeting Rules</h2>
          </div>
        </div>

        <div>
          <div className={styles.selectionStep}>
            <div>5</div>
            <h2>Settings and Code</h2>
          </div>
        </div>
      </div>

      <div className={styles.col8}>{modal}</div>
    </div>
  );
}

export default Customize;
