import styles from "../styles/selector.module.scss";
import { useState } from "react";
import { templateArray } from "./data";
import { useTemplate } from "../Components/Context";
import { ITemplate } from "./types";

function selector() {
  const [page, setPage] = useState("1");

  const { setId, setContents, setTemplate } = useTemplate();

  const cardData = (data: ITemplate) => {
    setId(data.id);
    setContents(data.contents);
    setTemplate(data.template);
  };

  return (
    <>
      {/* Modal Card Generator */}
      <div className={styles.modalCardGenerator}>
        <div>
          <h1>Modal Card Generator</h1>

          <p>
            Measure your return on email marketing efforts easier and faster by
            using thebest online tools. Popupsmart is ready to help you build an
            efficient email list!
          </p>
        </div>

        <div className={styles.selectionTitle}>
          <div>1</div>
          <h2>Choose your template</h2>
        </div>
      </div>

      {/* Modal Card Mapping and Selection */}
      <div>
        <div className={styles.cards}>
          {templateArray
            .filter((card) => card.set === page)
            .map((card) => (
              <div key={card.id} className={styles.card}>
                <img src={`/img/${page}-${card.id}.png`} alt={card.title} />

                <div className={styles.selectCard}>
                  <button
                    className={styles.selectButton}
                    onClick={() =>
                      cardData({
                        id: card.id,
                        contents: card.contents,
                        template: card.template,
                      })
                    }
                  >
                    Select Template
                  </button>
                </div>
              </div>
            ))}
        </div>

        {/* Templates Page Buttons */}
        <div className={styles.cardPageButtons}>
          <button
            className={`${page === "1" ? styles.cardPageButtonClicked : ""}`}
            onClick={() => setPage("1")}
          >
            1
          </button>

          <button
            className={`${page === "2" ? styles.cardPageButtonClicked : ""}`}
            onClick={() => setPage("2")}
          >
            2
          </button>

          <button
            className={`${page === "3" ? styles.cardPageButtonClicked : ""}`}
            onClick={() => setPage("3")}
          >
            3
          </button>
        </div>
      </div>
    </>
  );
}

export default selector;
