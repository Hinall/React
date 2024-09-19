import React from "react";
import { IoAdd } from "react-icons/io5";
import "./Comp.css";
import { useRef } from "react";
import { myContext } from "../store/AllItems";
import { useContext } from "react";

function AddTask() {
  const contextobj = useContext(myContext);

  const tasknameRef = useRef("");
  const duedateRef = useRef("");

  const handleAddBtn = (event) => {
    event.preventDefault();
    contextobj.addItems(tasknameRef.current.value, duedateRef.current.value);
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
              placeholder="Enter task"
              required
            />
          </div>
          <div className="col-4">
            <input type="date" ref={duedateRef} required />
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
