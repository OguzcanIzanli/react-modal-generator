import { useState } from "react";
import styles from "../styles/targetting.module.scss";
import { BiDesktop, BiMobile } from "react-icons/bi";
import Image from "next/image";
import { GrFormClose } from "react-icons/gr";
import { browserLanguages } from "./data";
import { useGetCode, useTargetting } from "../Components/Context/";
import { IClickedItem, ISelected } from "./types";

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

  const { setSeconds, setScroll } = useTargetting();

  // After X Seconds
  const [isAfterXSeconds, setIsAfterXSeconds] = useState(false);
  const [secondsInput, setSecondsInput] = useState("");

  const afterXSeconds = () => {
    setIsAfterXSeconds(!isAfterXSeconds);
    if (isAfterXSeconds) {
      setSeconds("");
      setSecondsInput("");
    }
  };

  const handleOnChangeAfterXSeconds = (e: any) => {
    setSeconds(e.target.value);
    setSecondsInput(e.target.value);
  };

  // After % Scroll
  const [isAfterScroll, setIsAfterScroll] = useState(false);
  const [scrollInput, setScrollInput] = useState("");

  const afterScroll = () => {
    setIsAfterScroll(!isAfterScroll);
    if (isAfterScroll) {
      setScroll("");
      setScrollInput("");
    }
  };

  const handleOnChangeAfterScroll = (e: any) => {
    setScroll(e.target.value);
    setScrollInput(e.target.value);
  };

  // Browser Language

  const [languageContainer, setLanguageContainer] = useState(false);
  const [selectedLanguagesDown, setSelectedLanguagesDown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] =
    useState<ISelected>(browserLanguages);

  const openLanguageContainer = () => {
    setLanguageContainer(!languageContainer);
  };

  const downButton = () => {
    setSelectedLanguagesDown(!selectedLanguagesDown);
  };

  const selectLanguage = (clickedItem: IClickedItem) => {
    setSelectedLanguage((prev) =>
      prev.map((item: ISelected) =>
        item.id === clickedItem.id
          ? { ...item, isSelected: !item.isSelected }
          : item
      )
    );
  };

  const [isCheckedAllLanguages, setIsCheckedAllLanguages] = useState(false);

  const selectAllLanguages = () => {
    setSelectedLanguage((prev) =>
      prev.map((item: ISelected) =>
        item.isSelected === false
          ? { ...item, isSelected: true }
          : { ...item, isSelected: false }
      )
    );

    setIsCheckedAllLanguages(!isCheckedAllLanguages);
    if (isCheckedAllLanguages) {
      clearAllLanguages();
    }
    console.log(selectedLanguage);
  };

  const clearAllLanguages = () => {
    setSelectedLanguage((prev) =>
      prev.map((item: ISelected) =>
        item.isSelected === true ? { ...item, isSelected: false } : item
      )
    );
    setIsCheckedAllLanguages(false);
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
          <input
            className={styles.switch}
            type="checkbox"
            id="switch2"
            onChange={afterXSeconds}
          />
          <label htmlFor="switch2">Toggle</label>
        </div>
        <input
          type="number"
          value={secondsInput}
          className={`${styles.targetingRulesInputs} ${
            isAfterXSeconds ? "" : "hidden"
          }`}
          onChange={handleOnChangeAfterXSeconds}
        />
      </div>

      {/* After % Scroll */}
      <div className={styles.rules}>
        <div className={styles.rulesSwitch}>
          <p className={styles.subTitles}>After % Scroll</p>
          <input
            className={styles.switch}
            type="checkbox"
            id="switch3"
            onChange={afterScroll}
          />
          <label htmlFor="switch3">Toggle</label>
        </div>
        <input
          type="number"
          value={scrollInput}
          className={`${styles.targetingRulesInputs} ${
            isAfterScroll ? "" : "hidden"
          }`}
          onChange={handleOnChangeAfterScroll}
        />
      </div>

      {/* Traffic Source */}
      <div className={styles.rules}>
        <div className={styles.rulesSwitch}>
          <p className={styles.subTitles}>Traffic Source</p>
          <input className={styles.switch} type="checkbox" id="switch4" />
          <label htmlFor="switch4">Toggle</label>
        </div>
        <input
          placeholder="Enter your traffic source domain"
          className={styles.targetingRulesInputs}
        />
      </div>

      {/* Browser Language */}
      <div className={styles.rules}>
        <div className={styles.rulesSwitch}>
          <p className={styles.subTitles}>Browser Language</p>
          <input className={styles.switch} type="checkbox" id="switch5" />
          <label htmlFor="switch5">Toggle</label>
        </div>

        <button onClick={openLanguageContainer} className={styles.dropdown}>
          Select
          <Image src="/down.svg" width={18} height={18} />
        </button>

        <div
          className={`${styles.languageContainer} ${
            languageContainer ? "" : "hidden"
          }`}
        >
          <ul className={styles.ulList}>
            <li className={styles.allLanguages}>
              <div className={styles.topping}>
                <input
                  type="checkbox"
                  checked={isCheckedAllLanguages}
                  onChange={() => selectAllLanguages()}
                />
              </div>
              <p>All Languages</p>
            </li>

            {selectedLanguage.map((item: ISelected) => (
              <li key={item.id} className={styles.langListElement}>
                <div className={styles.topping}>
                  <input
                    id={item.id}
                    type="checkbox"
                    checked={item.isSelected}
                    onChange={() => selectLanguage(item)}
                  />
                </div>
                <p>{item.language}</p>
              </li>
            ))}

            <div className={styles.clearAll}>
              <button
                className={styles.clearAllButton}
                onClick={() => clearAllLanguages()}
              >
                Clear All
              </button>
              <button
                className={styles.closeButton}
                onClick={openLanguageContainer}
              >
                Close
              </button>
            </div>
          </ul>
        </div>

        <div
          className={`${styles.selectedLanguages} ${
            selectedLanguagesDown ? "h-[36px]" : ""
          }`}
        >
          <div className={styles.languages}>
            {selectedLanguage.map((item: ISelected) =>
              item.isSelected === true ? (
                <button
                  className={styles.languagesButton}
                  onClick={() => selectLanguage(item)}
                >
                  {item.language}
                  <span>
                    <GrFormClose />
                  </span>
                </button>
              ) : (
                ""
              )
            )}
          </div>
          <button
            className="w-[10%] flex justify-end h-[36px]"
            onClick={downButton}
          >
            <Image src="/down.svg" width={19} height={19} />
          </button>
        </div>
      </div>

      {/* Exit Intent Targeting */}
      <div className={styles.rules}>
        <div className={styles.rulesSwitch}>
          <p className={styles.subTitles}>Exit Intent Targeting</p>
          <input className={styles.switch} type="checkbox" id="switch6" />
          <label htmlFor="switch6">Toggle</label>
        </div>
      </div>
    </div>
  );
}

export default Targetting;
