import styles from "./todoForm.module.css";
import { useState } from "react";

const TodoForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title.trim(), description.trim());
    setTitle("");
    setDescription("");
  };
  return (
    <div className={styles.form} id="add">
      <div onSubmit={submit} className={styles.inputGroup}>
        <div>
          <input
            className={styles.task}
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <input
            className={styles.taskDesc}
            type="text"
            placeholder="description of task"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className={styles.addTask}>
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};
export default TodoForm;
