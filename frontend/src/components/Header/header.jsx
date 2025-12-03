// Header component for ToDo App
import styles from "./header.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <h1>
        <a className={styles.heading} href="/">
          ToDo App
        </a>
      </h1>
    </div>
  );
};

export default NavBar;
