import Image from 'next/image'
import styles from './page.module.css'
import code from "public/assets/tag-1.png";
import next from "public/assets/Nextjs-logo.svg.png";
import Link from 'next/link';

export default function Home() {
  return (
   <div className={styles.container}>
    <div className={styles.item}>
      <Image className={styles.img2} src={code} alt='' width={100} height={100} />
      <h1 className={styles.title}>Next.js 13 <br/> Theming</h1>
      <p className={styles.description}>We will learn how to implement theming in next.js 13</p>
      <Link href="/portfolio">
        <button className={styles.btn}>Portfolio</button>
      </Link>
    </div>
    <div className={styles.item}>
      <Image className={styles.img1} src={next} alt='' width={300} height={100} />
    </div>
   </div>
  )
}
