import TodoForm from "../Components/TodoForm/todoForm";
import { useNavigate } from "react-router-dom";

const AddPage = ({ onAdd }) => {
  const navigate = useNavigate();

  //when form adds, navigate back to list
  const handleAdd = async (title, description) => {
    await onAdd(title, description);
    navigate("/");
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <TodoForm onAdd={handleAdd} />
    </div>
  );
};

export default AddPage;
