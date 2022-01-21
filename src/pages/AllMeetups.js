import React from "react";
import Todo from "../components/Todo";

const AllMeetups = () => {
  return (
    <div>
      {" "}
      <h1>My Todos</h1>
      <Todo text="test1" delete="" />
      <Todo text="test2" />
      <Todo text="test3" />
    </div>
  );
};

export default AllMeetups;
