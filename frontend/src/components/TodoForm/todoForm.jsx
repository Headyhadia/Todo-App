import styles from "./todoForm.module.css";

const TodoForm = () => {
  return (
    <div className={styles.form} id="add">
      <div className={styles.inputGroup}>
        <div>
          <input className={styles.task} type="text" placeholder="task 1" />
        </div>
        <div>
          <input
            className={styles.taskDesc}
            type="text"
            placeholder="description of task"
          />
        </div>
        <div>
          <button className={styles.addTask}>Add Task</button>
        </div>
      </div>
    </div>
  );
};
export default TodoForm;
