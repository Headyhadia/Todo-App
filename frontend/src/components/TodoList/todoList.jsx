import styles from "./todoList.module.css";
import TodoItem from "../todoItem/todoItem.jsx";
import { Link } from "react-router-dom";

const TodoList = ({ todos = [], onToggle, onDelete, onUpdate }) => {
  //Normalize: ensure todos is always an array

  const normalizedTodos = Array.isArray(todos)
    ? todos
    : todos && typeof todos === "object"
    ? Object.values(todos)
    : [];
  return (
    <div className={styles.todoListContainer}>
      <h2>Your Todo List</h2>

      <ul>
        {/* show message when empty, otherwise render todos */}
        {!normalizedTodos || normalizedTodos.length === 0 ? (
          <li>
            <div className={styles.noTodos}>No todos created yet.</div>
          </li>
        ) : (
          normalizedTodos.map((todo) => (
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
          ))
        )}
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
