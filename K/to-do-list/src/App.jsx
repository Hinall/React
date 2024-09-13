import React from "react";
import AppName from "./Components/AppName";
import AddTask from "./Components/AddTask";
import TaskItem from "./Components/TaskItem";
import { useState } from "react";
import { AllItemsContext } from "./store/AllItems";

function App() {
  const [Items, setItem] = useState([]);

  const addItems = (a, b) => {
    console.log(`new item added ${a} and ${b}`);
    // const newItem = [...Items, { taskname: a, date: b }];// storing in  constant and then
    // storing is not advisable due asyn function calling in background instead take current value only
    setItem((current) => [...current, { taskname: a, date: b }]); //use functional update to avoid Asynchronous updates
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
        <AllItemsContext.Provider
          value={{
            Items: Items,
            addItem: addItems,
            deleteItem: deleteItem,
          }}
        >
          <AppName />
          <div className="container">
            <AddTask />
            {Items.length === 0 && <h3>welocome</h3>}
            <TaskItem />
          </div>
        </AllItemsContext.Provider>
      </center>
    </>
  );
}

export default App;
