import React from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
  const { todos, isLoading, isError } = useSelector((state) => state);
  //   console.log("todos:", todos);
  if (isLoading) return <div style={{ textAign: "center" }}>Loading...</div>;
  if (isError) return <div style={{ textAign: "center" }}>Error...</div>;
  return (
    <div
      style={{
        // border: "1px solid",
        width: "30%",
        margin: "auto",
        marginTop: "20px",
        backgroundColor: "teal",
        padding: "15px",
        borderRadius: "10px",
      }}
    >
      {todos.map((todo) => (
        <div
          style={{
            border: "1px solid",
            margin: "auto",
            marginTop: "25px",
            width: "40%",
            padding: "15px",
            color: "white",
            fontWeight: "bold",
            borderRadius: "10px",
          }}
          key={todo.id}
        >
          {todo.value}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
