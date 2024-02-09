import React from 'react'
import styles from './singleBlog.module.css'
import Image from 'next/image'


const page = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.imgContainer}>
        <Image src='/100.jpg' lt="About Image" fill className={styles.img}/>
      </div> */}
      <div className={styles.textContainer}>
        <div className={styles.title}>
          Title
        </div>
        <div className={styles.detail}>
        <Image src='/pot.jpg' lt="About Image" fill className={styles.avatar}/>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>
            Author
          </span>
          <span className={styles.detailValue}>
            Date
          </span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default page
