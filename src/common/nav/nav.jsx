import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./nav.module.css";
import { Link, useLocation } from "react-router-dom";

export function Nav() {
  let location = useLocation();
  const [linkText, setLinkText] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    if (location.pathname === "/admin") {
      setLinkText("Back to Menu Jackpot");
      setLink("/");
    } else {
      setLinkText("Admin Panel");
      setLink("/admin");
    }
  }, [location]);

  useEffect(() => {});
  return (
    <Link to={link} className={styles.absolute}>
      {linkText}
    </Link>
  );
}
