import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Cart() {
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
          <Link href='/search'>Search</Link>
        </div>
      </header>
      <main className={styles.main}>
        Cart page
        <ul>
          <li>Product 1</li>
          <li>Product 2</li>
          <li>Product 3</li>
        </ul>
        <Link href='/checkout'>Go to Checkout</Link>
      </main>
    </div>
  )
}
