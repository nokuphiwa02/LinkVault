import type React from "react";
import styles from "./Navbar.module.css";

type NavbarProps={
  onSearch :(text: string)=>void
}

export const Navbar:React.FC<NavbarProps> = ({onSearch}) => {
  return (
    <div className={styles.navTitle}>
      <h1>Link Vault</h1>
      <div className={styles.SearchBar}>
        <input
          type="text"
          placeholder="search by title, url, description or tag"
          onChange={(e)=> onSearch(e.target.value)}
        />
        <button className={styles.searchBtn}>Search</button>
      </div>
    </div>
  );
};
