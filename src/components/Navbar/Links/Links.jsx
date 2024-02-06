"use client"
import React, { useState } from 'react'
import styles from "./Links.module.css";
import NavLinks from './NavLinks/NavLinks';

const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  
const Links = () => {
  const [open, setOpen] = useState(true);
  const session= true
  const isAdmin= true
  return (
    <div className="container">
      <div className={styles.links}>
        {links.map(link=>(
          <NavLinks item={link} key={link.title} />
        ))}
        {session?(
          <>
            {isAdmin && <NavLinks item={{title: "Admin", path: "/admin"}}/>}
            <button className={styles.logout}>Logout</button>
          </>
        ):(
          <NavLinks item={{title: "Login", path: "/login"}}/>
        )}
      </div>
      <button className={styles.menuButton}> Menu</button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map(link=>(
          <NavLinks item={link} key={link.title} />
        ))}
        </div>
      )}
    </div>
  )
}

export default Links
