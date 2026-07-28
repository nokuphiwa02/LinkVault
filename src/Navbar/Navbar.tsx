import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navTitle}>
      <h1>Link Vault</h1>
      <div className={styles.SearchBar}>
        <input
          type="text"
          placeholder="search by title, url, description or tag"
        />
        <button className={styles.searchBtn}>Search</button>
      </div>
    </div>
  );
};
