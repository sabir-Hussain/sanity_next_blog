import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Sanity.io and Next JS Blog</title>
        <meta
          name="description"
          content="Created by sabir Hussain www.isabir.dev"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <br /> sanity.io and Next.js Blog Toturial
        </h1>

        <p className={styles.description}>
         <Link href="/blog">Go to Blog</Link>
        </p>
      </main>

    </div>
   )
}
