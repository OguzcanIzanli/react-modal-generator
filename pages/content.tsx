import styles from "../styles/content.module.scss";
import Image from "next/image";
import { templateArray } from "../pages/data";
import { useState, useEffect } from "react";

function Content() {
  return (
    <div className={styles.content}>
      <div className={`${styles.titleContainer} mt-24 `}>
        <div className={styles.titleNumber}>3</div>
        <h1 className={styles.title}>Content</h1>
      </div>

      <p className={styles.subTitles}>Edit your content</p>

      {/* {templateArray[tempId].contents.map(()=> ())} */}
      <div className={styles.contentInputContainer}>
        <input className={styles.contentInput}></input>
        <input className={styles.contentInput}></input>
        <input className={styles.contentInput}></input>
        {/* OBJECT DEKİ HER INPUT İÇİN MAP YAPARAK İNPUTLARI OLUŞTUR */}
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
