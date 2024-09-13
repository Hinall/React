import React from "react";
import "./Comp.css";
import TaskSubItem from "./TaskSubItem";
import { useContext } from "react";
import { AllItemsContext } from "../store/AllItems";

function TaskItem() {
  const contextObj = useContext(AllItemsContext);
  const Items = contextObj.Items;

  return (
    <>
      {Items.map((object, i) => (
        <>
          <TaskSubItem
            key={object.taskname}
            taskname={object.taskname}
            date={object.date}
          />
        </>
      ))}
    </>
  );
}

export default TaskItem;
