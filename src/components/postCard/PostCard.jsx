import React from 'react'
import styles from "./postCard.module.css";
import Link from 'next/link';
import Image from 'next/image';


const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {/* {post.img &&  */}
        <div className={styles.imgContainer}>
        <Image
          src="/post.jpg"
          alt="About Image"
          fill
          className={styles.img}
        />
        </div>
        {/* } */}
        {/* <span className={styles.date}>{post.createdAt?.toString().slice(4, 16)}</span> */}
      </div>
      <div className={styles.bottom}>
         <h1 className={styles.title}>Title</h1>{/*{post.title} */}
         <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus explicabo illum fugit quod obcaecati? Consequuntur expedita, perspiciatis illo dolorum, necessitatibus ratione voluptatum eos quo nulla ipsa assumenda quis, numquam itaque?</p>{/*{post.body} */}
        <Link className={styles.link} href={`/blog/$`}>READ MORE</Link>
      </div>
      {/* {post.slug} */}
    </div>
  )
}

export default PostCard
