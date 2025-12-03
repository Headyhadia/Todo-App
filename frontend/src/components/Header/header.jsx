// Header component for ToDo App
import styles from "./header.module.css";

const navBar = () => {
  return (
    <div className={styles.navbar}>
      <h1>
        <a href="/">ToDo App</a>
      </h1>
    </div>
  );
};

export default navBar;
