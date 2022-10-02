import styles from "../styles/template_1.module.scss";
import Image from "next/image";
import { isMobile, isBrowser } from "react-device-detect";
import { useEffect } from "react";

import { IoMdCloseCircleOutline } from "react-icons/io";
import { useSize } from "../Components/Context";
import { usePosition } from "../Components/Context";
import { useColor } from "../Components/Context";
import { useTemplate } from "../Components/Context";
import { useLogo } from "../Components/Context";
import { useTargetting } from "../Components/Context";

// const wasd = setTimeout(Template_1, 10000);
// setTimeout(() => console.log("Initial timeout!"), 10000);

modalAlert();

function modalAlert() {
  console.log("wasd");
  setTimeout(function () {
    Template_1();
  }, 5000);
}

function Template_1() {
  const { size } = useSize();
  const { position } = usePosition();
  const { color } = useColor();
  const { contents } = useTemplate();
  const { logo } = useLogo();

  const { device } = useTargetting();

  if (
    device === "isMobile" ? isMobile : device === "isBrowser" ? isBrowser : true
  ) {
    return (
      <div
        className={`${styles.container} ${
          position ? position : "sticky top-[50px]"
        } ${size.width} ${size.width} ${size.height}`}
      >
        <div className={styles.closeButtonSquare}>
          <button className={styles.closeButton}>
            <IoMdCloseCircleOutline />
          </button>
        </div>

        <div className={styles.contents}>
          {/* Logo */}
          <div
            className={`${styles.circle} ${color.bgcolor} ${color.textcolor} `}
          >
            <Image src={logo} width={36} height={44} />
          </div>

          {/* Content */}
          <h1>{contents.h1}</h1>
          <h2>{contents.h2}</h2>
          <p>{contents.p}</p>

          {/* Button */}
          <form>
            <button className={styles.buttonCancel}>
              {contents.buttonCancel}
            </button>
            <button
              className={`${styles.buttonApply} ${color.bgcolor} ${color.buttoncolor}`}
            >
              {contents.buttonApply}
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default Template_1;
