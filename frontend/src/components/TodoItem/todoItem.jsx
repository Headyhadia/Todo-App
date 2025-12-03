import { Link } from "react-router-dom";
import styles from "./todoItem.module.css";
import { useState } from "react";

const TodoItem = ({ title = "" }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={styles.todoItems}>
      <div className={styles.todoItem}>
        <input className={styles.checkBox} type="checkbox" />
        <p> {title}</p>
        <a className={styles.dots} onClick={() => setMenuOpen(!menuOpen)}>
          <img src="./src/assets/3dots.png" alt="open menu" />
        </a>
        <ul
          className={`${styles.optionMenu} ${menuOpen ? styles.menuOpen : ""}`}
        >
          <li className={styles.optionItem}>
            <Link className={styles.link} to="/edit">
              Edit
            </Link>
          </li>
          <li className={styles.optionItem}>
            <Link className={styles.link} to="/delete">
              Delete
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TodoItem;
