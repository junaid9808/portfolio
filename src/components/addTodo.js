import { addTodo } from "../actions";
import { useRef } from "react";
import { useDispatch } from "react-redux";

const AddTodos = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const addNewtask = () => {
    const task = inputRef.current.value.trim();
    if (task !== "") {
      dispatch(addTodo(task));
      inputRef.current.value = "";
    }
    console.log("ghgfh", task);
  };
  return (
    <>
      <div className="flex flex-row justify-center items-center mt-10">
        <input type="text" placeholder="enter task" ref={inputRef} />
        <button
          className="p-1 rounded-md bg-blue-400 ml-2 "
          onClick={addNewtask}
        >
          add task
        </button>
      </div>
    </>
  );
};
export default AddTodos;
