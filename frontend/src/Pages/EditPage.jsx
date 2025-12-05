import TodoEditForm from "../components/EditForm/editForm";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditPage({ todos = [], onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const todoId = Number(id);
  const todo = todos.find((t) => t.id === todoId);

  const [title, setTitle] = useState(() => todo?.title ?? "");
  const [description, setDescription] = useState(() => todo?.description ?? "");

  const handleSave = async (e) => {
    e.preventDefault();
    await onUpdate(todoId, { title, description });
    navigate("/");
  };

  if (!todo) return <div style={{ padding: 20 }}>Todo not found</div>;

  return (
    <TodoEditForm
      title={title}
      setTitle={setTitle}
      description={description}
      setDescription={setDescription}
      onSubmit={handleSave}
      submitLabel="Save"
    />
  );
}
