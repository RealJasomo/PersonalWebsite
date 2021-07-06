import FrostedGlass from '@components/FrostedGlass'
import Head from 'next/head'
import Image from 'next/image'


import me from '@res/me.png'

import styles from './index.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jason Cramer - Software Engineer</title>
        <meta name="description" content="Jason Cramer - Full stack engineer" />
      </Head>
      <div className={styles.main}>
        <div className={styles.aside}>
          <Image className={styles.image} src={me} />
        </div>
        <div className={styles.paragraph}>
          <FrostedGlass> 
            <h1>Hi there!</h1>
            <p>I am a <b>full stack</b> software engineer</p>
          </FrostedGlass>          
        </div>
      </div>
    </div>
  )
}
