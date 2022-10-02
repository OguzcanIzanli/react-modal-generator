import styles from "../styles/dropdown.module.scss";
import { useState, useEffect } from "react";
import { AiOutlineDown } from "react-icons/ai";

function dropdown() {
  const [visible, setVisible] = useState<boolean>(true);

  const handleChange = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/peru")
      .then((res) => res.json())
      .then((res) => console.log(res.name));
  }, []);

  return (
    <div className={styles.languageSelectBox}>
      <button className={styles.dropdownButton} onClick={handleChange}>
        Select
        <span>
          <AiOutlineDown />
        </span>
      </button>
      <div
        className={`${styles.languageContainer} ${
          visible ? "hidden" : "block"
        }`}
      >
        <ul>
          <li>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                // id="topping1"
                // name="topping1"
                value="Paneer"
                //   checked={isCheckedDesktop}
                //   onChange={handleOnChangeDesktop}
              />
              {/* <div className="result">{isChecked ? "Y" : "N"}.</div> */}
              English
            </div>
          </li>
          <li>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                // id="topping1"
                // name="topping1"
                value="Paneer"
                //   checked={isCheckedDesktop}
                //   onChange={handleOnChangeDesktop}
              />
              {/* <div className="result">{isChecked ? "Y" : "N"}.</div> */}
              English
            </div>
          </li>
          <li>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                // id="topping1"
                // name="topping1"
                value="Paneer"
                //   checked={isCheckedDesktop}
                //   onChange={handleOnChangeDesktop}
              />
              {/* <div className="result">{isChecked ? "Y" : "N"}.</div> */}
              English
            </div>
          </li>
          <li>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                // id="topping1"
                // name="topping1"
                value="Paneer"
                //   checked={isCheckedDesktop}
                //   onChange={handleOnChangeDesktop}
              />
              {/* <div className="result">{isChecked ? "Y" : "N"}.</div> */}
              English
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default dropdown;
