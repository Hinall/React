import React from "react";
import "./Comp.css";

function TaskSubItem({ taskname, date, deleteItem }) {
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
          delete
        </button>
      </div>
    </div>
  );
}

export default TaskSubItem;
