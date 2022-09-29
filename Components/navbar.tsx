import styles from "../styles/navbar.module.scss";
import Image from "next/image";

function Navbar() {
  return (
    <div className={styles.navBar}>
      <div>
        <button>
          <Image src="/home.svg" width={36} height={36} />
        </button>
        <button className={styles.homeButton}>modal.cards</button>
      </div>

      <form className={styles.navList}>
        <button>Solutions</button>
        <button>Product Tour</button>
        <button>Showcase</button>
        <button>Pricing</button>
      </form>

      <form className={styles.navLastList}>
        <button>Sign in</button>
        <button className={styles.tryFreeButton}>Try for free</button>
      </form>
    </div>
  );
}

export default Navbar;
