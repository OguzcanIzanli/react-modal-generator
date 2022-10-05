import styles from "../styles/settingsandcode.module.scss";
import { useState } from "react";
import Image from "next/image";

function SettingsAndCode() {
  const [isCheckedSub, setIsCheckedSub] = useState(false);
  const [isCheckedData, setIsCheckedData] = useState(false);

  const handleOnChangeSub = () => {
    setIsCheckedSub(!isCheckedSub);
  };

  const handleOnChangeData = () => {
    setIsCheckedData(!isCheckedData);
  };

  return (
    <div className={styles.settingsandcode}>
      <div className={`${styles.titleContainer} mt-24`}>
        <div className={styles.titleNumber}>5</div>
        <h1 className={styles.title}>Settings and Code</h1>
      </div>
      <h2 className={styles.subTitle}>Webhook to Send data</h2>
      <h3>Enter your Webhook URL</h3>
      <h4>
        You can create a simple one with <strong>make.com</strong>
      </h4>
      <input className={styles.webhookInput}></input>

      <div className={styles.checkbox}>
        <div className={styles.topping}>
          <input
            type="checkbox"
            checked={isCheckedSub}
            onChange={handleOnChangeSub}
          />
        </div>
        <p className={styles.p}>Send form submissions</p>
      </div>

      <div className={styles.checkbox}>
        <div className={styles.topping}>
          <input
            type="checkbox"
            value="Paneer"
            checked={isCheckedData}
            onChange={handleOnChangeData}
          />
        </div>
        <p className={styles.p}>Send click data</p>
      </div>

      <button className={styles.getCodeButton}>Get Your Code</button>

      <div className={styles.codeBox}>
        <p className={styles.code}></p>
        <div>
          <button className={styles.copyCodeButton}>Copy the code</button>
        </div>
      </div>

      <div className={styles.noticeBox}>
        <Image src="/notice.svg" height={18} width={18} />
        <p>
          Copy and paste the embed code above just before the closing{" "}
          {`</body>`} tag of your website template file.
        </p>
      </div>
    </div>
  );
}

export default SettingsAndCode;
