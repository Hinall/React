import React from "react";
import AppName from "./Components/AppName";
import AddTask from "./Components/AddTask";
import TaskItem from "./Components/TaskItem";

function App() {
  // const addItems = (a, b) => {
  //   console.log(`new item added ${a} and ${b}`);
  //   // const newItem = [...Items, { taskname: a, date: b }];// storing in  constant and then
  //   // storing is not advisable due asyn function calling in background instead take current value only
  //   setItem((current) => [...current, { taskname: a, date: b }]); //use functional update to avoid Asynchronous updates
  // };

  // const deleteItem = (taskname) => {
  //   console.log("delete item " + taskname);
  //   const ItemAfterDeletion = Items.filter(
  //     (item) => item.taskname !== taskname
  //   );
  //   setItem(ItemAfterDeletion);
  // };
  return (
    <>
      <center>
        <contextProvider>
          <AppName />
          <div className="container">
            <AddTask />
            {/* {Items.length === 0 && <h3>welocome</h3>} */}
            <TaskItem />
          </div>
        </contextProvider>
      </center>
    </>
  );
}

export default App;
