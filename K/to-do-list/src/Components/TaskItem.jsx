import React from "react";
import "./Comp.css";
import TaskSubItem from "./TaskSubItem";
import { useContext } from "react";
import { myContext } from "../store/AllItems";

function TaskItem() {
  const contextObj = useContext(myContext);
  return (
    <>
      {contextObj.Items.map((object, i) => (
        <>
          <TaskSubItem key={i} taskname={object.taskname} date={object.date} />
        </>
      ))}
    </>
  );
}

export default TaskItem;
