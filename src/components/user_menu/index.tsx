"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import UserIcon from "../../../public/images/user.svg";
import { logOut } from "src/helpers/auth";

export type UserMenuProps = {};

const UserMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = async () => {
    await logOut();
    window.location.href = "/auth";
  };

  const handleProfileRedirect = () => {
    window.location.href = "/profile";
  };

  return (
    <div className={styles.user_container} onClick={handleDropdownToggle}>
      <Image src={UserIcon} alt="User icon" className={styles.user_icon} />
      {dropdownOpen && (
        <div
          className={`${styles.dropdown_menu} ${dropdownOpen ? styles.open : ""}`}
        >
          <ul>
            <li>
              <a onClick={handleProfileRedirect}>Profile</a>
            </li>
            <li>
              <a href="/settings">Settings</a>
            </li>
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      )}
      {dropdownOpen && (
        <div
          className={styles.backdrop}
          onClick={handleDropdownToggle}
          data-testid="backdrop"
        />
      )}
    </div>
  );
};

export default UserMenu;
