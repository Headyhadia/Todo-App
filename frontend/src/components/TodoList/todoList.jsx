import styles from "./todoList.module.css";
import TodoItem from "../todoItem/todoItem.jsx";
import { Link } from "react-router-dom";

const TodoList = () => {
  return (
    <div className={styles.todoListContainer}>
      <h2>Your Todo List</h2>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <div className={styles.buttonContainer}>
        <div>
          <Link to="/add" className={styles.taskButton}>
            Create Tasks
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
