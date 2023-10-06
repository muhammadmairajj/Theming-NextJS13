import React from 'react'
import styles from "./page.module.css";

function Portfolio() {
  return (
   <div className={styles.container}>
    <h1 className={styles.selectTitle}>Portfolio</h1>
    <div className={styles.items}>
      <div className={styles.item}>
        <div><span className={styles.title}>Angular</span></div>
        <div><span className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nobis aspernatur asperiores velit soluta, quidem quaerat optio architecto voluptatibus? Voluptates odit rerum quos consequatur quaerat praesentium molestias soluta, odio quia.</span></div>
      </div>
      <div className={styles.item}>
        <div><span className={styles.title}>React</span></div>
        <div><span className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nobis aspernatur asperiores velit soluta, quidem quaerat optio architecto voluptatibus? Voluptates odit rerum quos consequatur quaerat praesentium molestias soluta, odio quia.</span></div>
      </div>
      <div className={styles.item}>
        <div><span className={styles.title}>Node</span></div>
        <div><span className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nobis aspernatur asperiores velit soluta, quidem quaerat optio architecto voluptatibus? Voluptates odit rerum quos consequatur quaerat praesentium molestias soluta, odio quia.</span></div>
      </div>
      <div className={styles.item}>
        <div><span className={styles.title}>NestJS</span></div>
        <div><span className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nobis aspernatur asperiores velit soluta, quidem quaerat optio architecto voluptatibus? Voluptates odit rerum quos consequatur quaerat praesentium molestias soluta, odio quia.</span></div>
      </div>
    </div>
   </div>
  )
}

export default Portfolio