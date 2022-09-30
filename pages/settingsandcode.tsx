import styles from "../styles/settingsandcode.module.scss";

function SettingsAndCode() {
  return (
    <div className={styles.settingsandcode}>
      <div className={`${styles.titleContainer} mt-24`}>
        <div className={styles.titleNumber}>5</div>
        <h1 className={styles.title}>Settings and Code</h1>
      </div>
      <h4>Webhook to Send data</h4>
    </div>
  );
}

export default SettingsAndCode;
