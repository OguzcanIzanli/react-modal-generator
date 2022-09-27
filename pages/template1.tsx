import styles from "../styles/template1.module.scss";
import Image from "next/image";
import { IoMdCloseCircleOutline } from "react-icons/io";

function Template1() {
  return (
    <div className={styles.container}>
      <div className={styles.closeButtonSquare}>
        <button className={styles.closeButton}>
          <IoMdCloseCircleOutline />
        </button>
      </div>

      <div className={styles.ellipse}>
        <Image src="/star.svg" width={36} height={44} />
      </div>

      <h1>Security Code</h1>

      <h2>This code expires in 24 hours</h2>

      <p>Code</p>

      <form>
        <button className={styles.button1}>Cancel</button>
        <button className={styles.button2}>Continue</button>
      </form>
    </div>
  );
}

export default Template1;
