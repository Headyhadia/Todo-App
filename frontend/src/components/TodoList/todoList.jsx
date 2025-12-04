import styles from "./todoList.module.css";
import TodoItem from "../todoItem/todoItem.jsx";
import { Link } from "react-router-dom";

const TodoList = ({ todos, onToggle, onDelete, onUpdate }) => {
  if (!todos || todos.length === 0) {
    return <div>No todos created yet.</div>;
  }
  return (
    <div className={styles.todoListContainer}>
      <h2>Your Todo List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem
              todo={todo}
              onToggle={() => onToggle(todo.id)}
              onDelete={() => onDelete(todo.id)}
              onEdit={() => {
                /* handled via link inside TodoItem */
              }}
              onUpdate={onUpdate}
            />
          </li>
        ))}
      </ul>
      <div className={styles.buttonContainer}>
        <div>
          <Link to="/add" className={styles.taskButton}>
            Create Todos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
