import FrostedGlass from '@components/FrostedGlass'
import Head from 'next/head'

import styles from './index.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jason Cramer</title>
        <meta name="description" content="Jason Cramer - Full stack engineer" />
      </Head>
    </div>
  )
}
