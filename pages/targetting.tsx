import { useState } from "react";
import styles from "../styles/targetting.module.scss";
import { BiDesktop, BiMobile } from "react-icons/bi";
import Select from "react-select";

import { useGetCode } from "../Components/Context/";

function Targetting() {
  // Visitor Device
  const [isCheckedDesktop, setIsCheckedDesktop] = useState(false);
  const [isCheckedMobile, setIsCheckedMobile] = useState(false);
  const [isVisitorDevice, setIsVisitorDevice] = useState(false);

  const { setDeviceForBack } = useGetCode();

  const handleOnChangeDesktop = () => {
    setIsCheckedDesktop(!isCheckedDesktop);
    if (isCheckedDesktop === false) {
      setIsCheckedMobile(false);
      setDeviceForBack("isBrowser");
    }
  };

  const handleOnChangeMobile = () => {
    setIsCheckedMobile(!isCheckedMobile);
    console.log(isCheckedMobile);
    if (isCheckedMobile === false) {
      setIsCheckedDesktop(false);
      return setDeviceForBack("isMobile");
    }
    setDeviceForBack("");
  };

  const visitorDevice = () => {
    setIsVisitorDevice(!isVisitorDevice);
    isVisitorDevice
      ? setDeviceForBack("")
      : isCheckedMobile
      ? setDeviceForBack("isMobile")
      : isCheckedDesktop
      ? setDeviceForBack("isBrowser")
      : "";
  };

  // const options = [
  //   { value: "eng-ENG", label: "English" },
  //   { value: "fr-FR", label: "French" },
  //   { value: "ger-GER", label: "German" },
  //   { value: "pl-PL", label: "Polish" },
  //   { value: "dt-DT", label: "Dutch" },
  //   { value: "fn-FN", label: "Finnish" },
  // ];

  const handleChange = (e: any) => {
    console.log(e);
  };

  return (
    <div className={styles.targetting}>
      <div className={`${styles.titleContainer} mt-24`}>
        <div className={styles.titleNumber}>4</div>
        <h1 className={styles.title}>Targeting Rules</h1>
      </div>

      {/* Visitor Device */}
      <div className={styles.rules}>
        <div className={styles.rulesSwitch}>
          <p className={styles.subTitles}>
            Visitor Device (Desktop and Mobile)
          </p>
          <input
            className={styles.switch}
            type="checkbox"
            id="switch1"
            onChange={visitorDevice}
          />
          <label htmlFor="switch1">Toggle</label>
        </div>
        <div
          className={`${styles.deviceBox} ${isVisitorDevice ? "" : "hidden"} `}
        >
          <div className={styles.boxContainer}>
            <div className={styles.checkbox}>
              <div className={styles.topping}>
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
        </div>
      </div>

      {/* After X Seconds */}
      <div className={styles.rules}>
        <div className={styles.rulesSwitch}>
          <p className={styles.subTitles}>After X Seconds</p>
          <input className={styles.switch} type="checkbox" id="switch2" />
          <label htmlFor="switch2">Toggle</label>
        </div>
        <input className={styles.targetingRulesInputs} />
      </div>

      {/* After % Scroll */}
      <div className={styles.rules}>
        <div className={styles.rulesSwitch}>
          <p className={styles.subTitles}>After % Scroll</p>
          <input className={styles.switch} type="checkbox" id="switch3" />
          <label htmlFor="switch3">Toggle</label>
        </div>
        <input className={styles.targetingRulesInputs} />
      </div>

      {/* Traffic Source */}
      <div className={styles.rules}>
        <div className={styles.rulesSwitch}>
          <p className={styles.subTitles}>Traffic Source</p>
          <input className={styles.switch} type="checkbox" id="switch4" />
          <label htmlFor="switch4">Toggle</label>
        </div>
        <input className={styles.targetingRulesInputs} />
      </div>

      {/* Browser Language */}
      <div className={styles.rules}>
        <div className={styles.rulesSwitch}>
          <p className={styles.subTitles}>Browser Language</p>
          <input className={styles.switch} type="checkbox" id="switch5" />
          <label htmlFor="switch5">Toggle</label>
        </div>

        <Select
          // options={options}
          onChange={handleChange}
          isMulti
          placeholder="Select"
        />

        <label htmlFor="q4">
          <div className={`${styles.dropdown} `}>
            <span>
              Select
              <span>dfdfg</span>
            </span>
            <input value="4" type="checkbox" id="q4" />
            <p className={styles.context}></p>
          </div>
        </label>

        <div className={styles.dropdown}>
          <label htmlFor="touch">
            <span>Select</span>
          </label>
          <input type="checkbox" id="touch" />

          <ul className={styles.slide}>
            <li>
              <a href="#">Lorem Ipsum</a>
            </li>
            <li>
              <a href="#">Lorem Ipsum</a>
            </li>
            <li>
              <a href="#">Lorem Ipsum</a>
            </li>
            <li>
              <a href="#">Lorem Ipsum</a>
            </li>
          </ul>

          <div className={styles.dropdown}>
            <label htmlFor="touch2">
              <span>Select</span>
            </label>
            <input type="checkbox" id="touch2" />

            <ul className={styles.slide}>
              <li>
                <a href="#">Lorem Ipsum</a>
              </li>
              <li>
                <a href="#">Lorem Ipsum</a>
              </li>
              <li>
                <a href="#">Lorem Ipsum</a>
              </li>
              <li>
                <a href="#">Lorem Ipsum</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Exit Intent Targeting */}
      <div className={styles.rules}>
        <div className={styles.rulesSwitch}>
          <h3>Exit Intent Targeting</h3>
          <input className={styles.switch} type="checkbox" id="switch6" />
          <label htmlFor="switch6">Toggle</label>
        </div>
      </div>
    </div>
  );
}

export default Targetting;
