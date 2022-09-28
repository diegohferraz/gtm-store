import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

export default function Product() {
  const router = useRouter()

  useEffect(() => {
    window.dataLayer.push({
      event: 'c1_product_item_viewed',
      event_type: 'product_item_viewed',
      event_value: router.query.id,
      session_id: '16643681668741825',
      item_id: router.query.id,
      user_id: 'jhonny-cash',
      placement_id: 'PRODUCT|PAGE',
      recommendation_id: '86c6804d-f85d-46e5-b2c5-07bb289f1dd6'
    })
  }, [])

  const handleAddProductToCart = () => {
    window.dataLayer.push({
      event: 'c1_added_to_cart',
      event_type: 'added_to_cart',
      event_value: router.query.id,
      session_id: '16643681668741825',
      item_id: router.query.id,
      user_id: 'jhonny-cash',
      placement_id: 'CART',
      recommendation_id: '86c6804d-f85d-46e5-b2c5-07bb289f1dd6',
      ab_version: "Controller (A)",
      ab_source: "powerboost",
      channel: "WEB_DESKTOP"
    })

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
