import React from "react";
import "./Comp.css";
import { useState } from "react";
function AddTask({ onNewItem }) {
  const [taskname, setTaskname] = useState();
  const [duedate, setduedate] = useState();

  const handletaskname = (event) => {
    // console.log(event.target.value);
    setTaskname(event.target.value);
  };

  const handleduedate = (event) => {
    setduedate(event.target.value);
    // console.log(event.target.value);
  };

  const handleButtonClick = () => {
    onNewItem(taskname, duedate);
    setTaskname("");
    setduedate("");
  };

  return (
    <div>
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            value={taskname}
            placeholder="Enter task"
            onChange={handletaskname}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleduedate} value={duedate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            onClick={handleButtonClick}
            className="btn btn-success kg-button"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
