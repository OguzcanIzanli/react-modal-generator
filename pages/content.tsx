import styles from "../styles/content.module.scss";
import Image from "next/image";

import { useTemplate } from "../Components/Context";

function Content() {
  const { contents, setContents } = useTemplate();

  const onChangeInputh1 = (e: any) => {
    setContents({ ...contents, h1: e.target.value });
  };

  const onChangeInputh2 = (e: any) => {
    setContents({ ...contents, h2: e.target.value });
  };

  const onChangeInputh3 = (e: any) => {
    setContents({ ...contents, h3: e.target.value });
  };

  const onChangeInputh4 = (e: any) => {
    setContents({ ...contents, h4: e.target.value });
  };

  const onChangeInputh5 = (e: any) => {
    setContents({ ...contents, h5: e.target.value });
  };

  const onChangeInputh6 = (e: any) => {
    setContents({ ...contents, h6: e.target.value });
  };

  const onChangeInputp = (e: any) => {
    setContents({ ...contents, p: e.target.value });
  };

  const onChangeInputb1 = (e: any) => {
    setContents({ ...contents, buttonApply: e.target.value });
  };

  const onChangeInputb2 = (e: any) => {
    setContents({ ...contents, buttonCancel: e.target.value });
  };

  return (
    <div className={styles.content}>
      <div className={`${styles.titleContainer} mt-24 `}>
        <div className={styles.titleNumber}>3</div>
        <h1 className={styles.title}>Content</h1>
      </div>

      <p className={styles.subTitles}>Edit your content</p>

      <div className={styles.contentInputContainer}>
        {contents.h1 ? (
          <input
            placeholder={`${contents.h1}`}
            className={styles.contentInput}
            onChange={onChangeInputh1}
          ></input>
        ) : (
          ""
        )}
        {contents.h2 ? (
          <input
            placeholder={`${contents.h2}`}
            className={styles.contentInput}
            onChange={onChangeInputh2}
          ></input>
        ) : (
          ""
        )}
        {contents.h3 ? (
          <input
            placeholder={`${contents.h3}`}
            className={styles.contentInput}
            onChange={onChangeInputh3}
          ></input>
        ) : (
          ""
        )}
        {contents.h4 ? (
          <input
            placeholder={`${contents.h4}`}
            className={styles.contentInput}
            onChange={onChangeInputh4}
          ></input>
        ) : (
          ""
        )}
        {contents.h5 ? (
          <input
            placeholder={`${contents.h5}`}
            className={styles.contentInput}
            onChange={onChangeInputh5}
          ></input>
        ) : (
          ""
        )}
        {contents.h6 ? (
          <input
            placeholder={`${contents.h6}`}
            className={styles.contentInput}
            onChange={onChangeInputh6}
          ></input>
        ) : (
          ""
        )}
        {contents.p ? (
          <input
            placeholder={`${contents.p}`}
            className={styles.contentInput}
            onChange={onChangeInputp}
          ></input>
        ) : (
          ""
        )}
        {contents.buttonApply ? (
          <input
            placeholder={`${contents.buttonApply}`}
            className={styles.contentInput}
            onChange={onChangeInputb1}
          ></input>
        ) : (
          ""
        )}
        {contents.buttonCancel ? (
          <input
            placeholder={`${contents.buttonCancel}`}
            className={styles.contentInput}
            onChange={onChangeInputb2}
          ></input>
        ) : (
          ""
        )}
      </div>

      <p className={styles.subTitles}>Upload image</p>

      <div className={styles.uploadBox}>
        <div>
          <Image src="/uploadLogo.svg" width={18} height={18} />
          <p>
            Drop your image here or <span>upload</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content;
