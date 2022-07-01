import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAPI } from "../Store/Todos/todos.action";
import Todo from "./Todo";

const TodoInput = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((state) => state);

  const handleAddTodo = () => {
    let payload = {
      value,
      status: false,
    };
    dispatch(addTodoAPI(payload));
    setValue("");
  };

  //   if (isLoading) return <div style={{ textAign: "center" }}>Loading...</div>;
  if (isError) return <div style={{ textAign: "center" }}>Error...</div>;
  return (
    <div>
      <h1>Todos App</h1>
      <br />
      <input
        style={{
          padding: "15px",
          width: "20%",
          borderBottomLeftRadius: "8px",
          borderTopLeftRadius: "8px",
        }}
        type="text"
        placeholder="enter something..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        style={{
          padding: "17px",
          width: "5%",
          backgroundColor: "teal",
          color: "white",
          border: "none",
          borderBottomRightRadius: "8px",
          borderTopRightRadius: "8px",
        }}
        onClick={handleAddTodo}
      >
        ADD
      </button>
      <div>
        <Todo></Todo>
      </div>
    </div>
  );
};

export default TodoInput;
