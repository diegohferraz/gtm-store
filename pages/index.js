import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GTM STORE</title>
        <meta name="description" content="This is a test application to test GTM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to GTM STORE
        </h1>
      </main>

      <footer className={styles.footer}>
        <p>just a test</p>
      </footer>
    </div>
  )
}
