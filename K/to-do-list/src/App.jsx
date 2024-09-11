import React from "react";
import AppName from "./Components/AppName";
import AddTask from "./Components/AddTask";
import TaskItem from "./Components/TaskItem";
import { useState } from "react";

function App() {
  const [Items, setItem] = useState([]);

  const handleNewItem = (a, b) => {
    console.log(`new item added ${a} and ${b}`);
    const newItem = [...Items, { taskname: a, date: b }];
    setItem(newItem);
  };

  const deleteItem = (taskname) => {
    console.log("delete item " + taskname);
    const ItemAfterDeletion = Items.filter(
      (item) => item.taskname !== taskname
    );
    setItem(ItemAfterDeletion);
  };
  return (
    <>
      <center>
        <AppName />
        <div className="container">
          <AddTask onNewItem={handleNewItem} />
          {Items.length === 0 && <h3>welocome</h3>}
          <TaskItem objectArr={Items} deleteItem={deleteItem} />
        </div>
      </center>
    </>
  );
}

export default App;
