import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { ReactComponent as MinhasFotos } from "../../../assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../../assets/estatisticas.svg";
import { ReactComponent as AdicionarFotos } from "../../../assets/adicionar.svg";
import styles from "./UserHeaderNav.module.css";
import { useState } from "react";
import useMedia from "../../../hooks/useMedia";
import { useEffect } from "react";
export default function UserHeaderNav() {
  // const [mobile, setMobile] = useState(null)
  const { logout } = useAuth();
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);
  return (
    <>
      {mobile && (
        <button
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => {
            setMobileMenu(!mobileMenu);
          }}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end>
          <MinhasFotos />
          {mobile && "Minhas fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Estatisticas />
          {mobile && "Estastisticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          {" "}
          <AdicionarFotos />
          {mobile && "Adicionar foto"}
        </NavLink>
        <button onClick={logout}>Sair</button>
      </nav>
    </>
  );
}
