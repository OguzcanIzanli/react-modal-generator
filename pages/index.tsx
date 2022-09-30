import Head from "next/head";
import styles from "../styles/Home.module.scss";

import Template_0 from "./template_0";
import Navbar from "./navbar";
import Hero from "./hero";
import Selector from "./selector";
import Footer from "./footer";

const Home = () => {
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

      {/* Container - Start */}
      <div className={styles.container}>
        <Template_0 /> {/* Example Modal */}
        <Navbar /> {/* Navbar */}
        <Hero /> {/* Hero */}
        <Selector /> {/* Template Selector and Customize */}
        <Footer />
      </div>
      {/* Container - End */}
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
