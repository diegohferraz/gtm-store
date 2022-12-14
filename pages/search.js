import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Search() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GTM STORE - SEARCH</title>
        <meta name="description" content="This is a test application to test GTM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className='nav'>
          <Link href='/search'>Search</Link>
          <Link href='/cart'>Cart</Link>
        </div>
      </header>
      <main className={styles.main}>
        Search Result
      </main>
    </div>
  )
}
