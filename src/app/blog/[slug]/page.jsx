import React from 'react'
import styles from './singleBlog.module.css'
import Image from 'next/image'


const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='/100.jpg' lt="About Image" fill className={styles.img}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.title}>
          Title
        </div>
        <div className={styles.detail}>
        {/* <Image src='/pot.jpg' lt="About Image" fill className={styles.avatar}/> */}
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>
            Author
          </span>
          <span className={styles.detailTitle}>
            Published Date
          </span>
        </div>
        <div className={styles.detailText}>
          <span className={styles.detailValue}>
            Akash009
          </span>
          <span className={styles.detailValue}>
            09/02/2024
          </span>
        </div>
        
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellendus nihil facilis vero repudiandae. Delectus suscipit placeat similique provident. Odit est animi quo ad. Rerum enim labore corporis deserunt quos?
        </div>
      </div>
    </div>
  )
}

export default page
