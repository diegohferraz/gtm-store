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

  const handleRemoveFromWishlist = (evt, prodId) => {
    evt.stopPropagation()

    window.dataLayer.push({
      event: 'c1_removed_from_wishlist',
      event_type: 'added_to_wishlist',
      event_value: prodId,
      session_id: '87917321739721312873',
      item_id: prodId,
      user_id: 'jhonny-cash',
      placement_id: 'HOME|COLLECTION',
      recommendation_id: '86c6804d-f85d-46e5-b2c5-07bb289f1dd6'
    })
  }

  const handleCaroulselProductClick = (prodID, itemPosition) => {
    console.log('Carousel product click', prodID, itemPosition)
    window.dataLayer.push({
      event: 'c1_carousel_product_click',
      event_type: 'carousel_product_click',
      event_value: itemPosition,
      session_id: '87917321739721312873',
      item_id: prodID,
      user_id: 'jhonny-cash',
      placement_id: 'HOME|COLLECTION',
      recommendation_id: '86c6804d-f85d-46e5-b2c5-07bb289f1dd6',
      impressions: '[prod252710633, prod252710633, prod252710633, prod252710633, prod252710633, prod252710633, prod252710633, prod252710633, prod252710633, prod252710633, prod252710633, prod252710633]'
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
            <li onClick={() => handleCaroulselProductClick('1', 1)}>
              <span>Product 1</span>
              <button onClick={(evt) => handleAddToWishlist(evt, 1)}>Add to wishlist</button>
            </li>
          </Link>
          <Link href='/product/2'>
            <li onClick={() => handleCaroulselProductClick('2', 2)}>
              <span>Product 2</span>
              <button onClick={(evt) => handleAddToWishlist(evt, 2)}>Add to wishlist</button>
            </li>
          </Link>
          <Link href='/product/3'>
            <li onClick={() => handleCaroulselProductClick('3', 3)}>
              <span>Wishlisted Product 3</span>
              <button onClick={(evt) => handleRemoveFromWishlist(evt, 3)}>Remove From wishlist</button>
            </li>
          </Link>
          <Link href='/product/4'>
            <li onClick={() => handleCaroulselProductClick('4', 4)}>
              <span>Product 4</span>
              <button onClick={(evt) => handleAddToWishlist(evt, 4)}>Add to wishlist</button>
            </li>
          </Link>
        </ul>
        <ul className={styles.productList}>
          <Link href='/product/5'>
            <li onClick={() => handleCaroulselProductClick('5', 1)}>
              <span>Product 5</span>
              <button onClick={(evt) => handleAddToWishlist(evt, 5)}>Add to wishlist</button>
            </li>
          </Link>
          <Link href='/product/6'>
            <li onClick={() => handleCaroulselProductClick('6', 2)}>
              <span>Product 6</span>
              <button onClick={(evt) => handleAddToWishlist(evt, 6)}>Add to wishlist</button>
            </li>
          </Link>
          <Link href='/product/7'>
            <li onClick={() => handleCaroulselProductClick('7', 3)}>
              <span>Product 7</span>
              <button onClick={(evt) => handleAddToWishlist(evt, 7)}>Add to wishlist</button>
            </li>
          </Link>
          <Link href='/product/8'>
            <li onClick={() => handleCaroulselProductClick('8', 4)}>
              <span>Wishlisted Product 8</span>
              <button onClick={(evt) => handleRemoveFromWishlist(evt, 8)}>Remove From wishlist</button>
            </li>
          </Link>
        </ul>
      </main>
    </div>
  )
}
