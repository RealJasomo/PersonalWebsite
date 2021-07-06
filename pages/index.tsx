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
            <p>I am a third-year computer science student at Rose-Hulman Institute of Technology.  I have a passion towards full-stack web development.</p>
          </FrostedGlass>          
        </div>
      </div>
    </div>
  )
}
