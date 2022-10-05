import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Template_0 from "./templates/template_0";
import Navbar from "./navbar";
import Hero from "./hero";
import Selector from "./selector";
import Footer from "./footer";
import Content from "./content";
import Targetting from "./targetting";
import Appearance from "./appearance";
import SettingsAndCode from "./settingsandcode";
import { useTemplate } from "../Components/Context";

const Home = () => {
  const { template } = useTemplate();

  return (
    <div>
      <Head>
        <title>Modal Card Creator</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/home.svg" />
      </Head>

      {/* Theme */}
      <div className={styles.theme}>
        <div className={styles.firstBackground}></div>
        <div className={styles.secondBackground}></div>
      </div>

      <div className={styles.container}>
        <Navbar />
        <Hero />
        <Template_0 />
        <Selector />

        <div className={styles.col4_8}>
          <div className={styles.col4}>
            <Appearance />
            <Content />
            <Targetting />
            <SettingsAndCode />
          </div>
          <div className={styles.col8}>{template}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
