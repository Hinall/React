import React from "react";
import "./Comp.css";
import TaskSubItem from "./TaskSubItem";
function TaskItem({ objectArr, deleteItem }) {
  return (
    <>
      {objectArr.map((object, i) => (
        <>
          <TaskSubItem
            key={i}
            taskname={object.taskname}
            date={object.date}
            deleteItem={deleteItem}
          />
        </>
      ))}
    </>
  );
}

export default TaskItem;
