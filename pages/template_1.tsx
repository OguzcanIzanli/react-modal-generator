import styles from "../styles/template_1.module.scss";
import Image from "next/image";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useFontSize } from "../Components/Context";
import { usePosition } from "../Components/Context";
import { useColor } from "../Components/Context";
import { useTemplate } from "../Components/Context";

function Template_1() {
  const { fontSize } = useFontSize();
  const { position } = usePosition();
  const { color } = useColor();
  const { contents } = useTemplate();

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

      {/* Logo */}
      <div className={`${styles.circle} ${color.bgcolor} ${color.textcolor} `}>
        <Image src="/star.svg" width={36} height={44} />
      </div>

      {/* Content */}
      <h1 className={`${fontSize.h1}`}>{contents.h1}</h1>
      <h2 className={`${fontSize.h2}`}>{contents.h2}</h2>
      <p>{contents.p}</p>

      {/* Button */}
      <form>
        <button className={styles.buttonCancel}>{contents.buttonCancel}</button>
        <button
          className={`${styles.buttonApply} ${color.bgcolor} ${color.buttoncolor}`}
        >
          {contents.buttonApply}
        </button>
      </form>
    </div>
  );
}

export default Template_1;
