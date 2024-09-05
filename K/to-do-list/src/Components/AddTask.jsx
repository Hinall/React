import React from "react";

function AddTask() {
  return (
    <div>
      <div class="row">
        <div class="col-6">
          <input type="text" placeholder="Enter task" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success">
            Success
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
