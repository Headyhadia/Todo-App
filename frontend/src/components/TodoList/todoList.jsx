import styles from "./todoList.module.css";
import TodoItem from "../todoItem/todoItem.jsx";

const TodoList = () => {
  return (
    <div className={styles.todoListContainer}>
      <h2>Your Todo List</h2>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <div className={styles.buttonContainer}>
        <div>
          <button className={styles.taskButton}>Add More Tasks</button>
        </div>
        <div>
          <button className={styles.taskButton}>Delete Task</button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
