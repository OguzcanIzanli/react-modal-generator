import styles from "../styles/hero.module.scss";
import Image from "next/image"

function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <h1>Simple modal card creator</h1>

        <p>
          A utility-first CSS framework packed with classeslike flex, pt-4,
          text-center and rotate-90 that can becomposed to build any design,
          directly in your markup.
        </p>

        <button>Try it out now</button>

        {/* HERO ADVANTAGES*/}
        <div className={styles.heroAdvantages}>
          <span>
            <span>
              <Image src="/check.svg" width={16} height={16} />
            </span>
            Free and paid plans
          </span>
          <span>
            <span>
              <Image src="/check.svg" width={16} height={16} />
            </span>
            Setup in minutes
          </span>
          <span>
            <span>
              <Image src="/check.svg" width={16} height={16} />
            </span>
            No credit card required*
          </span>
        </div>
      </div>

      <div className={styles.moreAdvantages}>
        <div>
          <h1>3x</h1>
          <p>Increase Conversion Rate</p>
        </div>

        <div>
          <h1>120%</h1>
          <p>Email Subscribers</p>
        </div>

        <div>
          <h1>390%</h1>
          <p>More Customer Engagement</p>
        </div>

        <div>
          <h2>Popupsmart meets all your business needs.</h2>
        </div>
      </div>
    </>
  );
}

export default Hero;
