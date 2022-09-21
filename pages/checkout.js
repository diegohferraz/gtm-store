import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function checkout() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GTM STORE - SEARCH</title>
        <meta name="description" content="This is a test application to test GTM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className='nav'>
          <Link href='/'>Home</Link>
        </div>
      </header>
      <main className={styles.main}>
        <h1>You finished the purchase flow!</h1>
      </main>
    </div>
  )
}
