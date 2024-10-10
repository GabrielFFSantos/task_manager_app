"use client";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Logo from "../../../public/images/next.svg";
import UserMenu from "../user_menu";

export type HeaderProps = {};

const Header = () => {
  return (
    <header className={styles.base_header}>
      <Image src={Logo} alt="Logo icon" className={styles.logo} />
      <UserMenu />
    </header>
  );
};

export default Header;
