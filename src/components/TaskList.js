import React from "react";

import Task from "./Task";

function TaskList({deletesItem, tasks}) {
  return (
    <div className="tasks">
      {tasks.map((task, index)=> (
        <Task
        deletesItem={deletesItem}
        key={index}
        text ={task.text}
        category={task.category}
        />
      ))}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
