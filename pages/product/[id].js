import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

export default function Product() {
  const router = useRouter()

  const handleAddProductToCart = () => {
    alert(`Added product ${router.query.id} to cart!`)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>GTM STORE</title>
        <meta name="description" content="This is a test application to test GTM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className='nav'>
          <Link href='/'>Home</Link>
          <Link href='/search'>Search</Link>
          <Link href='/cart'>Cart</Link>
        </div>
      </header>
      <main className={styles.main}>
        Product {router.query.id}

        <button onClick={handleAddProductToCart}>Add product {router.query.id} to cart</button>
      </main>
    </div>
  )
}
