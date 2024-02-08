"use client";
import Link from 'next/link'
import React from 'react'
import styles from "./NavLink.module.css";
import { usePathname } from "next/navigation";

const NavLinks = ({item}) => {
  const pathName = usePathname();
  // console.log(item);
  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLinks
