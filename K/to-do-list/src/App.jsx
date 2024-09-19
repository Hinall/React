import React, { useContext } from "react";
import AppName from "./Components/AppName";
import AddTask from "./Components/AddTask";
import TaskItem from "./Components/TaskItem";
import { myContext } from "./store/AllItems";
function App() {
  const contextObj = useContext(myContext);

  return (
    <>
      <center>
        <AppName />
        <div className="container">
          <AddTask />
          {contextObj.Items.length === 0 && <h3>welocome</h3>}
          <TaskItem />
        </div>
      </center>
    </>
  );
}

export default App;
