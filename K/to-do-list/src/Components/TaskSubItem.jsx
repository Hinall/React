import React from "react";
import { TiDelete } from "react-icons/ti";
import "./Comp.css";
import { AllItemsContext } from "../store/AllItems";
import { useContext } from "react";

function TaskSubItem({ taskname, date }) {
  const context = useContext(AllItemsContext);
  const deleteItem = context.deleteItem;

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
