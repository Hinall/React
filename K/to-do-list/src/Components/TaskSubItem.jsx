import React from "react";
import { TiDelete } from "react-icons/ti";
import "./Comp.css";
import { useContext } from "react";
import { myContext } from "../store/AllItems";

function TaskSubItem({ taskname, date }) {
  const contextobj = useContext(myContext);
  const deleteItem = contextobj.deleteItem;

  const handleDeleteBtn = () => {
    deleteItem(taskname);
  };

  return (
    <div className="row kg-row">
      <div className="col-6 kg-text">{taskname}</div>
      <div className="col-4 kg-text">{date}</div>
      <div className="col-2">
        <button
          type="button"
          onClick={handleDeleteBtn}
          className="btn btn-danger kg-button"
        >
          <TiDelete />
        </button>
      </div>
    </div>
  );
}

export default TaskSubItem;
