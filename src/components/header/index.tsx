"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Logo from "../../../public/images/next.svg";
import UserIcon from "../../../public/images/user.svg";

export type HeaderProps = {};

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className={`${styles.base_header}`}>
      <Image src={Logo} alt="Logo icon" className={`${styles.logo}`} />
      <div
        className={`${styles.user_container}`}
        onClick={handleDropdownToggle}
      >
        <Image
          src={UserIcon}
          alt="User icon"
          className={`${styles.user_icon}`}
        />
        {dropdownOpen && (
          <div
            className={`${styles.dropdown_menu} ${dropdownOpen ? styles.open : ""}`}
          >
            <ul>
              <li>
                <a href="/profile">Profile</a>
              </li>
              <li>
                <a href="/settings">Settings</a>
              </li>
              <li>
                <a href="/logout">Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
      {dropdownOpen && (
        <div className={styles.backdrop} onClick={handleDropdownToggle} />
      )}
    </header>
  );
};

export default Header;
