import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import UserHeaderNav from "../UserHeaderNav";
import styles from "./UserHeader.module.css";
export default function UserHeader() {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/conta/postar":
        setTitle("Poste sua Foto");
        break;
      case "/conta/estatisticas":
        setTitle("Estatisticas");
        break;
      default:
        setTitle("Minha conta");
    }
  }, [location]);
  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
}
