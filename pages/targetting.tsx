import styles from "../styles/targetting.module.scss";
import Checkbox from "./checkbox";

function Targetting() {
  return (
    <div className={styles.targetting}>
      <div className={`${styles.titleContainer} mt-24`}>
        <div className={styles.titleNumber}>4</div>
        <h1 className={styles.title}>Targeting Rules</h1>
      </div>

      {/* Visitor Device */}
      <div className={styles.rules}>
        <div className={styles.rulesSwitch}>
          <p className={styles.subTitles}>Visitor Device</p>
          <input className={styles.switch} type="checkbox" id="switch1" />
          <label htmlFor="switch1">Toggle</label>
        </div>

        <Checkbox />
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
