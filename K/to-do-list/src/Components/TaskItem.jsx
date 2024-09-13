import React from "react";
import "./Comp.css";
import TaskSubItem from "./TaskSubItem";
function TaskItem({ objectArr, deleteItem }) {
  return (
    <>
      {objectArr.map((object, i) => (
        <>
          <TaskSubItem
            key={object.taskname}
            taskname={object.taskname}
            date={object.date}
            deleteItem_c2={deleteItem}
          />
        </>
      ))}
    </>
  );
}

export default TaskItem;
