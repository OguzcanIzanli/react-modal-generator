import styles from "../styles/footer.module.scss";
import Image from "next/image";
import { useState } from "react";

function Footer() {
  const [isCheckedQ1, setIsCheckedQ1] = useState(false);
  const [isCheckedQ2, setIsCheckedQ2] = useState(false);
  const [isCheckedQ3, setIsCheckedQ3] = useState(false);
  const [isCheckedQ4, setIsCheckedQ4] = useState(false);
  const [isCheckedQ5, setIsCheckedQ5] = useState(false);
  const [isCheckedQ6, setIsCheckedQ6] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value === "1" ? setIsCheckedQ1(!isCheckedQ1) : "";
    e.target.value === "2" ? setIsCheckedQ2(!isCheckedQ2) : "";
    e.target.value === "3" ? setIsCheckedQ3(!isCheckedQ3) : "";
    e.target.value === "4" ? setIsCheckedQ4(!isCheckedQ4) : "";
    e.target.value === "5" ? setIsCheckedQ5(!isCheckedQ5) : "";
    e.target.value === "6" ? setIsCheckedQ6(!isCheckedQ6) : "";
  };

  return (
    <div className={styles.footer}>
      <h1 className={styles.footerTitle}>
        Conversion & UX ready popups & modals
      </h1>

      <div className={styles.appProperties}>
        <div className={styles.appProperty}>
          <Image src="/pixelperfect.svg" width={55} height={55} />
          <h1 className={styles.propertyTitle}>Pixel Perfect</h1>
          <h2 className={styles.property}>
            Helps you calculate your email marketing roi to measure success.
          </h2>
        </div>
        <div className={styles.appProperty}>
          <Image src="/conversion.svg" width={55} height={55} />
          <h1 className={styles.propertyTitle}>Conversion Ready</h1>
          <h2 className={styles.property}>
            Empowers your emails by generating afree code for a CTA in your
            subject line.
          </h2>
        </div>
        <div className={styles.appProperty}>
          <Image src="/useful.svg" width={55} height={55} />
          <h1 className={styles.propertyTitle}>Modern & Useful</h1>
          <h2 className={styles.property}>
            Enables you to estimate the total profit of your investment on a
            popup service.
          </h2>
        </div>
      </div>

      <div className={styles.askedQuestions}>
        <h1 className={styles.askedQuestionsTitle}>
          Frequently Asked Questions
        </h1>
      </div>

      <div className={styles.faq}>
        <label htmlFor="q1">
          <div
            className={`${styles.dropdown} ${
              isCheckedQ1 === true ? "bg-gray-50" : ""
            }`}
          >
            <span
              className={`${
                isCheckedQ1 === true ? "text-black" : "text-gray-500"
              }`}
            >
              How do I pay for the essentials or premium plan?
            </span>
            <input
              value="1"
              type="checkbox"
              id="q1"
              onChange={handleOnChange}
            />
            <p className={styles.context}></p>
          </div>
        </label>

        <label htmlFor="q2">
          <div
            className={`${styles.dropdown} ${
              isCheckedQ2 === true ? "bg-gray-50" : ""
            }`}
          >
            <span
              className={`${
                isCheckedQ2 === true ? "text-black" : "text-gray-500"
              }`}
            >
              Can I cancel my essentials or premium plan subscription at my
              time?
            </span>
            <input
              value="2"
              type="checkbox"
              id="q2"
              onChange={handleOnChange}
            />
            <p className={styles.context}>
              You can pay with a credit card or via net banking (if you’re in
              United States). We willrenew your subscription automatically at
              the end of every billing cycle. You can paywith a credit card or
              via net banking (if you’re in United States). We will renew your
              subscription automatically at the end of every billing cycle.
            </p>
          </div>
        </label>

        <label htmlFor="q3">
          <div
            className={`${styles.dropdown} ${
              isCheckedQ3 === true ? "bg-gray-50" : ""
            }`}
          >
            <span
              className={`${
                isCheckedQ3 === true ? "text-black" : "text-gray-500"
              }`}
            >
              How do I pay for the essentials or premium plan?
            </span>
            <input
              value="3"
              type="checkbox"
              id="q3"
              onChange={handleOnChange}
            />
            <p className={styles.context}></p>
          </div>
        </label>

        <label htmlFor="q4">
          <div
            className={`${styles.dropdown} ${
              isCheckedQ4 === true ? "bg-gray-50" : ""
            }`}
          >
            <span
              className={`${
                isCheckedQ4 === true ? "text-black" : "text-gray-500"
              }`}
            >
              We need to add new users to our team, how will that be billed?
            </span>
            <input
              value="4"
              type="checkbox"
              id="q4"
              onChange={handleOnChange}
            />
            <p className={styles.context}></p>
          </div>
        </label>

        <label htmlFor="q5">
          <div
            className={`${styles.dropdown} ${
              isCheckedQ5 === true ? "bg-gray-50" : ""
            }`}
          >
            <span
              className={`${
                isCheckedQ5 === true ? "text-black" : "text-gray-500"
              }`}
            >
              How do I pay for the essentials or premium plan?
            </span>
            <input
              value="5"
              type="checkbox"
              id="q5"
              onChange={handleOnChange}
            />
            <p className={styles.context}></p>
          </div>
        </label>

        <label htmlFor="q6">
          <div
            className={`${styles.dropdown} ${
              isCheckedQ6 === true ? "bg-gray-50" : ""
            }`}
          >
            <span
              className={`${
                isCheckedQ1 === true ? "text-black" : "text-gray-500"
              }`}
            >
              Can I cancel my essentials or premium plan subscription at my
              time?
            </span>
            <input
              value="6"
              type="checkbox"
              id="q6"
              onChange={handleOnChange}
            />
            <p className={styles.context}></p>
          </div>
        </label>
      </div>

      <div className={styles.appMoreProperties}>
        <h1 className={styles.appMorePropertiesTitle}>
          Build great popups without code
        </h1>
        <div className={styles.appMorePropContainer}>
          <div className={styles.appMoreProp}>
            <div className={styles.circle}>
              <Image src="/flag.svg" width={55} height={55} />
            </div>
            <h1 className={styles.morePropTitle}>Targeting Options</h1>
            <h2 className={styles.moreProp}>
              Target +26 trigger to your visitors
            </h2>
          </div>
          <div className={styles.appMoreProp}>
            <div className={styles.circle}>
              <Image src="/nocode.svg" width={55} height={55} />
            </div>
            <h1 className={styles.morePropTitle}>No-Code</h1>
            <h2 className={styles.moreProp}>
              No code required while you’re creating a popup
            </h2>
          </div>
          <div className={styles.appMoreProp}>
            <div className={styles.circle}>
              <Image src="/options.svg" width={55} height={55} />
            </div>
            <h1 className={styles.morePropTitle}>Targeting Options</h1>
            <h2 className={styles.moreProp}>
              Integrated with your marketing and CRM platforms
            </h2>
          </div>
          <div className={styles.appMoreProp}>
            <div className={styles.circle}>
              <Image src="/aws.svg" width={55} height={55} />
            </div>
            <h1 className={styles.morePropTitle}>Targeting Options</h1>
            <h2 className={styles.moreProp}>
              Don’t worry about speed and Amazon AWS resources
            </h2>
          </div>
        </div>
      </div>

      <div className={styles.popupsmart}>
        <Image
          className="text-black"
          src="/popupsmart.svg"
          height={34}
          width={34}
        />
        <p className={styles.smart}>Powered by Popupsmart</p>
      </div>
    </div>
  );
}

export default Footer;
