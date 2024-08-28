"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import RightArrowIcon from "../../../public/images/arrow_forward.svg";
import LeftArrowIcon from "../../../public/images/arrow_back.svg";

export type CollapsibleMenuProps = React.HTMLAttributes<HTMLDivElement> & {};

const CollapsibleMenu: React.FC<CollapsibleMenuProps> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleDropdownToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`${styles.content}`}>
      <div
        className={`${styles.menu_container} ${menuOpen ? styles.is_open : ""}`}
      >
        {menuOpen ? (
          <Image
            src={LeftArrowIcon}
            alt="Left arrow icon"
            className={`${styles.arrows_icon}`}
            onClick={handleDropdownToggle}
          />
        ) : (
          <Image
            src={RightArrowIcon}
            alt="Right arrow icon"
            className={`${styles.arrows_icon}`}
            onClick={handleDropdownToggle}
          />
        )}
      </div>
      <div className={`${styles.children_container}`}>{children}</div>
    </div>
  );
};

export default CollapsibleMenu;
