import React from "react";
import { TiDelete } from "react-icons/ti";
import "./Comp.css";

function TaskSubItem({ taskname, date, deleteItem_c2 }) {
  const handleDeleteBtn = () => {
    deleteItem_c2(taskname);
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
