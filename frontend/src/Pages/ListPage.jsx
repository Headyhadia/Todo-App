import TodoList from "../Components/TodoList/todoList";

const ListPage = ({ todos, onToggle, onDelete, onUpdate }) => {
  return (
    <div>
      <TodoList
        todos={todos}
        onToggle={onToggle}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />
    </div>
  );
};

export default ListPage;
