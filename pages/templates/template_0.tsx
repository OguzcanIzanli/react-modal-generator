import styles from "../../styles/template_0.module.scss";
import Image from "next/image";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Link from "next/link";

function Template_0() {
  return (
    <div className={styles.container}>
      <div className={styles.closeButtonSquare}>
        <button className={styles.closeButton}>
          <IoMdCloseCircleOutline />
        </button>
      </div>

      <div className={styles.bolt}>
        <span>
          <Image src="/bolt.svg" width={16} height={16} />
        </span>
        Grow email list
      </div>

      <div className={styles.cost}>
        <span>
          <Image src="/cost.svg" width={16} height={16} />
        </span>
        Increase sales conversion
      </div>

      <div className={styles.col6}>
        <div className={styles.col12}>
          <Image src="/camper.svg" width={106} height={38} />

          <h1>Join the club</h1>

          <h2>
            Subscribe and Get an Extra <span>25% Off</span> on your first
            purchase.
          </h2>

          <form>
            <input placeholder="Email address" />
            <button className={styles.button2}>Subscribe</button>
          </form>

          <h3>
            By signing up, you agree to{" "}
            <Link href="/">
              <a>Privacy Policy </a>
            </Link>
            and{" "}
            <Link href="/">
              <a>Terms of Use</a>
            </Link>
            .
          </h3>
        </div>
      </div>

      <div className={styles.col6}>
        <img src="/homeModalImg.png" />
      </div>
    </div>
  );
}

export default Template_0;
