import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GTM STORE</title>
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
        <ul className={styles.productList}>
          <Link href='/product/1'><li>Product 1</li></Link>
          <Link href='/product/1'><li>Product 2</li></Link>
          <Link href='/product/1'><li>Product 3</li></Link>
          <Link href='/product/1'><li>Product 4</li></Link>
        </ul>
        <ul className={styles.productList}>
          <Link href='/product/1'><li>Product 5</li></Link>
          <Link href='/product/1'><li>Product 6</li></Link>
          <Link href='/product/1'><li>Product 7</li></Link>
          <Link href='/product/1'><li>Product 8</li></Link>
        </ul>
      </main>
    </div>
  )
}
