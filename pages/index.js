import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  const handleAddToWishlist = (evt, prodId) => {
    evt.stopPropagation()

    window.dataLayer.push({
      event: 'c1_add_to_wishlist',
      event_type: 'added_to_wishlist',
      event_value: prodId,
      session_id: '87917321739721312873',
      item_id: prodId,
      user_id: 'jhonny-cash',
      placement_id: 'HOME|COLLECTION',
      recommendation_id: '86c6804d-f85d-46e5-b2c5-07bb289f1dd6'
    })
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
          <Link href='/search'>Search</Link>
          <Link href='/cart'>Cart</Link>
        </div>
      </header>
      <main className={styles.main}>
        <ul className={styles.productList}>
          <Link href='/product/1'>
            <li>
              <span>Product 1</span>
              <button onClick={(evt) => handleAddToWishlist(evt, 1)}>Add to wishlist</button>
            </li>
          </Link>
          <Link href='/product/2'>
            <li>
              <span>Product 2</span>
              <button onClick={(evt) => handleAddToWishlist(evt, 2)}>Add to wishlist</button>
            </li>
          </Link>
          <Link href='/product/3'>
            <li>
              <span>Product 3</span>
              <button onClick={(evt) => handleAddToWishlist(evt, 3)}>Add to wishlist</button>
            </li>
          </Link>
          <Link href='/product/4'>
            <li>
              <span>Product 4</span>
              <button onClick={(evt) => handleAddToWishlist(evt, 4)}>Add to wishlist</button>
            </li>
          </Link>
        </ul>
        <ul className={styles.productList}>
          <Link href='/product/5'>
            <li>
              <span>Product 5</span>
              <button onClick={(evt) => handleAddToWishlist(evt, 5)}>Add to wishlist</button>
            </li>
          </Link>
          <Link href='/product/6'>
            <li>
              <span>Product 6</span>
              <button onClick={(evt) => handleAddToWishlist(evt, 6)}>Add to wishlist</button>
            </li>
          </Link>
          <Link href='/product/7'>
            <li>
              <span>Product 7</span>
              <button onClick={(evt) => handleAddToWishlist(evt, 7)}>Add to wishlist</button>
            </li>
          </Link>
          <Link href='/product/8'>
            <li>
              <span>Product 8</span>
              <button onClick={(evt) => handleAddToWishlist(evt, 8)}>Add to wishlist</button>
            </li>
          </Link>
        </ul>
      </main>
    </div>
  )
}
