import styles from "../styles/template_1.module.scss";
import Image from "next/image";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useFontSize } from "../Components/Context";
import { usePosition } from "../Components/Context";
import { useColor } from "../Components/Context";

function Template_1() {
  const { fontSize } = useFontSize();
  const { position } = usePosition();
  const { color } = useColor();

  const customLocProp = "flex relative flex-col";

  return (
    <div
      className={`${styles.container} ${
        position ? position : customLocProp
      } ${position}`}
    >
      <div className={styles.closeButtonSquare}>
        <button className={styles.closeButton}>
          <IoMdCloseCircleOutline />
        </button>
      </div>

      <div className={`${styles.circle} ${color.bgcolor} ${color.textcolor} `}>
        {/* LOGO */}
        <Image src="/star.svg" width={36} height={44} />
      </div>

      {/* TITLE */}
      <h1 className={`${fontSize.h1}`}>Security Code</h1>
      {/*  */}
      {/* SUBTITLE */}
      <h2 className={`${fontSize.h2}`}>This code expires in 24 hours</h2>
      {/* CONTENTS */}
      <p>Code</p>

      <form>
        <button className={styles.buttonCancel}>Cancel</button>
        <button
          className={`${styles.buttonApply} ${color.bgcolor} ${color.buttoncolor}`}
        >
          Continue
        </button>
      </form>
    </div>
  );
}

export default Template_1;
