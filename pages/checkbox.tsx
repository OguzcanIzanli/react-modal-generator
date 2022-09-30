import { useState } from "react";
import styles from "../styles/checkbox.module.scss";
import { BiDesktop, BiMobile } from "react-icons/bi";

function Checkbox() {
  const [isCheckedDesktop, setIsCheckedDesktop] = useState(false);
  const [isCheckedMobile, setIsCheckedMobile] = useState(false);

  const handleOnChangeDesktop = () => {
    setIsCheckedDesktop(!isCheckedDesktop);
    if (isCheckedDesktop === false) {
      setIsCheckedMobile(false);
    }
  };

  const handleOnChangeMobile = () => {
    setIsCheckedMobile(!isCheckedMobile);
    if (isCheckedMobile === false) {
      setIsCheckedDesktop(false);
    }
  };

  return (
    <div className={styles.deviceBox}>
      <div className={styles.checkbox}>
        <div className={styles.topping}>
          <div
            className={`${styles.box} ${
              isCheckedDesktop === false ? "invisible" : ""
            }`}
          ></div>

          <input
            type="checkbox"
            // id="topping1"
            // name="topping1"
            value="Paneer"
            checked={isCheckedDesktop}
            onChange={handleOnChangeDesktop}
          />

          {/* <div className="result">{isChecked ? "Y" : "N"}.</div> */}
        </div>
        <span>
          <BiDesktop />
        </span>
        <p className={styles.p}>Desktop</p>
      </div>

      <div className={styles.checkbox}>
        <div className={styles.topping}>
          <div
            className={`${styles.box} ${
              isCheckedMobile === false ? "invisible" : ""
            }`}
          ></div>

          <input
            type="checkbox"
            // id="topping2"
            // name="topping2"
            value="Paneer"
            checked={isCheckedMobile}
            onChange={handleOnChangeMobile}
          />

          {/* <div className="result">{isChecked ? "Y" : "N"}.</div> */}
        </div>
        <span>
          <BiMobile />
        </span>
        <p className={styles.p}>Mobile</p>
      </div>
    </div>
  );
}

export default Checkbox;
