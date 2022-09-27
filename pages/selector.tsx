import styles from "../styles/selector.module.scss";
import { useState } from "react";
import { modalArray } from "./data";
import { selectModalType } from "../types";
import Customize from "./customize";

function selector() {
  const [page, setPage] = useState("1");
  const [modal, setModal] = useState<JSX.Element>();

  return (
    <div>
      <div className={styles.boxes}>
        {modalArray
          .filter((item) => item.Set === page)
          .map((item) => (
            <div key={item.id} className={styles.box}>
              <img src={`/img/${page}-${item.id}.png`} alt={item.title} />
              <div className={styles.selectBox}>
                <button
                  className={styles.selectButton}
                  onClick={() => setModal(item.template)}
                >
                  Select Template
                </button>
              </div>
            </div>
          ))}
      </div>

      <div className={styles.pageButtons}>
        <button
          className={`${page === "1" ? styles.clicked : ""}`}
          onClick={() => setPage("1")}
        >
          1
        </button>

        <button
          className={`${page === "2" ? styles.clicked : ""}`}
          onClick={() => setPage("2")}
        >
          2
        </button>

        <button
          className={`${page === "3" ? styles.clicked : ""}`}
          onClick={() => setPage("3")}
        >
          3
        </button>
      </div>
      <Customize modal={modal} />
    </div>
  );
}

export default selector;
