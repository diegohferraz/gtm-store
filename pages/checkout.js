import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Checkout() {
  useEffect(() => {
    window.dataLayer.push({
      event: 'c1_purchased',
      event_type: 'purchased',
      event_value: 150.30,
      session_id: '87917321739721312873',
      impressions: '[prod252710633, prod252710633, prod252710633]',
      user_id: 'jhonny-cash',
      placement_id: 'HOME|COLLECTION',
      recommendation_id: '86c6804d-f85d-46e5-b2c5-07bb289f1dd6'
    })
  }, [])

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
