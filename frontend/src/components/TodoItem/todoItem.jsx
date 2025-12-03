import styles from "./todoItem.module.css";

const TodoItem = () => {
  return (
    <div className={styles.todoItems}>
      <div className={styles.todoItem}>
        <input className={styles.checkBox} type="checkbox" />
        <div />
        <p> {""}</p>
      </div>
    </div>
  );
};

export default TodoItem;
