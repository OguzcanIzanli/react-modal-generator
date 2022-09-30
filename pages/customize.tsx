import styles from "../styles/customize.module.scss";

import Content from "./content";
import Targetting from "./targetting";
import Appearance from "./appearance";
import SettingsAndCode from "./settingsandcode";

function Customize({ template }: { template: JSX.Element | undefined }) {
  return (
    // Container - Start
    <div className={styles.container}>
      {/* Column 4 - Start */}
      <div className={styles.col4}>
        <Appearance /> {/* Appearance */}
        <Content /> {/* Content */}
        <Targetting /> {/* Targettin Rules */}
        <SettingsAndCode /> {/* Settings and Code */}
      </div>
      {/* Column 4 - End */}

      {/* Column 8 - Start */}
      <div className={styles.col8}>{template}</div>
      {/* Column 8 - End */}
    </div>
    // Container - End
  );
}

export default Customize;
