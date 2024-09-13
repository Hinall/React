import React from "react";
import { IoAdd } from "react-icons/io5";
import "./Comp.css";
import { useState } from "react";
import { useRef } from "react";
import { AllItemsContext } from "../store/AllItems";
import { useContext } from "react";

function AddTask() {
  const tasknameRef = useRef("");
  const duedateRef = useRef("");
  const contextobj = useContext(AllItemsContext);
  const addItems = contextobj.addItem;
  // const [taskname, setTaskname] = useState("");
  // const [duedate, setduedate] = useState("");

  // const handletaskname = (event) => {
  //   setTaskname(event.target.value);
  // };

  // const handleduedate = (event) => {
  //   setduedate(event.target.value);
  // };

  // const handleButtonClick = (event) => {
  //   event.preventDefault();
  //   onNewItem(taskname, duedate);
  //   setTaskname("");
  //   setduedate("");
  // };

  const handleAddBtn = (event) => {
    event.preventDefault();
    addItems(tasknameRef.current.value, duedateRef.current.value);
    tasknameRef.current.value = "";
    duedateRef.current.value = "";
  };

  return (
    <div>
      <form onSubmit={handleAddBtn}>
        <div className="row kg-row">
          <div className="col-6">
            <input
              type="text"
              ref={tasknameRef}
              // value={taskname} for two way binding using useState
              placeholder="Enter task"
              // onChange={handletaskname}
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              ref={duedateRef}
              //  onChange={handleduedate}  value={duedate}
            />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-success kg-button">
              <IoAdd />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddTask;
