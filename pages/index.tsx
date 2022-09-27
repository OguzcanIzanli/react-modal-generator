import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { ToDoType } from "../types";
import axios from "axios";
import { useEffect, useState } from "react";
import Template0 from "./template0";
import Selector from "./selector";

const Home = () => {
  return (
    // THEME
    <div>
      <Head>
        <title>Modal Generator</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.theme}>
        <div className={styles.firstBackground}></div>
        <div className={styles.secondBackground}></div>
      </div>

      <div className={styles.container}>
        <Template0 />

        {/* // NAVBAR */}
        <div className={styles.navBar}>
          <div>
            <button>
              <Image src="/home.svg" width={36} height={36} />
            </button>
            <button className={styles.homeButton}>modal.cards</button>
          </div>

          <form className={styles.navList}>
            <button>Solutions</button>
            <button>Product Tour</button>
            <button>Showcase</button>
            <button>Pricing</button>
          </form>

          <form className={styles.navLastList}>
            <button>Sign in</button>
            <button className={styles.tryButton}>Try for free</button>
          </form>
        </div>

        {/* HERO */}
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

        {/* MODAL SELECTOR */}
        <div className={styles.modalCardGenerator}>
          <div>
            <h1>Modal Card Generator</h1>

            <p>
              Measure your return on email marketing efforts easier and faster
              by using thebest online tools. Popupsmart is ready to help you
              build an efficient email list!
            </p>
          </div>

          <div className={styles.selectionStep}>
            <div>1</div>
            <h2>Choose your template</h2>
          </div>
        </div>
        <Selector />
      </div>
    </div>
  );
};

export default Home;

// const [todo, setTodo] = useState<ToDoType[]>([]);

//   const getTodos = async () => {
//     const { data } = await axios.get<ToDoType[]>(
//       "https://6319c72e6b4c78d91b4337fb.mockapi.io/todos"
//     );

//     setTodo(data);
//   };

//   useEffect(() => {
//     getTodos();
//   }, []);

//   return (
//     <div className={styles.wasd}>
//       <Head>
//         <title>Modal Generator</title>
//<meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* <h1 className="text-3xl font-bold underline">Hello world!</h1>
//       <Image src="/vercel.svg" width={50} height={50} />

//       {todo.map((todo, index) => (
//         <div key={index}> {todo.content} </div>
//       ))} */}
//     </div>

// <div className={styles.container}>
//   <Head>
//     <title>Create Next App</title>
//     <meta name="description" content="Generated by create next app" />
//     <link rel="icon" href="/favicon.ico" />
//   </Head>

//   <main className={styles.main}>
//     <h1 className={styles.title}>
//       Welcome to <a href="https://nextjs.org">Next.js!</a>
//     </h1>

//     <p className={styles.description}>
//       Get started by editing{' '}
//       <code className={styles.code}>pages/index.tsx</code>
//     </p>

//     <div className={styles.grid}>
//       <a href="https://nextjs.org/docs" className={styles.card}>
//         <h2>Documentation &rarr;</h2>
//         <p>Find in-depth information about Next.js features and API.</p>
//       </a>

//       <a href="https://nextjs.org/learn" className={styles.card}>
//         <h2>Learn &rarr;</h2>
//         <p>Learn about Next.js in an interactive course with quizzes!</p>
//       </a>

//       <a
//         href="https://github.com/vercel/next.js/tree/canary/examples"
//         className={styles.card}
//       >
//         <h2>Examples &rarr;</h2>
//         <p>Discover and deploy boilerplate example Next.js projects.</p>
//       </a>

//       <a
//         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//         className={styles.card}
//       >
//         <h2>Deploy &rarr;</h2>
//         <p>
//           Instantly deploy your Next.js site to a public URL with Vercel.
//         </p>
//       </a>
//     </div>
//   </main>

//   <footer className={styles.footer}>
//     <a
//       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Powered by{' '}
//       <span className={styles.logo}>
//         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//       </span>
//     </a>
//   </footer>
// </div>
