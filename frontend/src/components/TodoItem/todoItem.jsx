import { Link } from "react-router-dom";
import styles from "./todoItem.module.css";
import { useState } from "react";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={styles.todoItems}>
      <div className={styles.todoItem}>
        <input
          className={styles.checkBox}
          type="checkbox"
          checked={!!todo.done}
          onChange={onToggle}
        />
        <p className={todo.done ? styles.completed : ""}> {todo.title}</p>
        <a className={styles.dots} onClick={() => setMenuOpen(!menuOpen)}>
          <img src="./src/assets/3dots.png" alt="open menu" />
        </a>
        <ul
          className={`${styles.optionMenu} ${menuOpen ? styles.menuOpen : ""}`}
        >
          <li className={styles.optionItem}>
            <Link className={styles.link} to={`/edit/${todo.id}`}>
              Edit
            </Link>
          </li>
          <li className={styles.optionItem}>
            <button className={styles.btn} onClick={onDelete}>
              Delete
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TodoItem;
