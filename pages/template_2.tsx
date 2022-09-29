import styles from "../styles/template_2.module.scss";
import Image from "next/image";
import { IoMdCloseCircleOutline } from "react-icons/io";

function Template_2() {
  return (
    <div className={styles.container}>
      <div className={styles.closeButtonSquare}>
        <button className={styles.closeButton}>
          <IoMdCloseCircleOutline />
        </button>
      </div>

      <Image src="/img1.png" width={480} height={300} />

      <h1>Install Local Now</h1>

      <h2>We’ve gone native, try it!</h2>

      <form>
        <button className={styles.button2}>Continue</button>
        <button className={styles.button1}>Not now</button>
      </form>
    </div>
  );
}

export default Template_2;
