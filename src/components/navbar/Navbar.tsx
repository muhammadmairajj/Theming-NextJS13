"use client";
import React, { useContext } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import { ThemeContext } from "@/context/ThemeContext";

const links: any = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Portfolio",
    url: "/portfolio",
  },
];

function Navbar() {
  const { theme, switchDark, switchLight } = useContext(ThemeContext);
  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.logo}>
        Programming with Mairaj
      </Link>
      <div className={styles.links}>
        {links.map((link: any) => {
          return (
            <Link key={link.url} href={link.url} className={styles.link}>
              {link.title}
            </Link>
          );
        })}
        <button
        className={`${styles.themebtns}`}
          onClick={
            theme === "dark"
              ? switchLight
              : switchDark
          }
        >
          {theme === "dark" ? "🔆" : "🌙"}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
