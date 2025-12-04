import styles from "./EditForm.module.css"; // ← using the copied CSS

export default function TodoEditForm({
  title,
  setTitle,
  description,
  setDescription,
  onSubmit,
  submitLabel = "Save",
}) {
  return (
    <div className={styles.editPage}>
      <h2>Edit Todo</h2>
      <form onSubmit={onSubmit}>
        <div>
          <input
            className={styles.titleInput}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
        </div>
        <div>
          <input
            className={styles.descriptionInput}
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
        </div>
        <button className={styles.btn} type="submit">
          {submitLabel}
        </button>
      </form>
    </div>
  );
}
