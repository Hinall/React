import { createContext } from "react";
import { useReducer } from "react";
export const AllItemsContext = createContext([]);

const contextProvider = ({ children }) => {
  const [Items, dispatchItem] = useReducer(reducerfn, []); //

  const addItems = (taskname, tdate) => {
    const ItemAction = {
      type: "ADD",
      payload: {
        taskname: taskname,
        date: tdate,
      },
    };
    dispatchItem(ItemAction);
  };

  const deleteItem = (taskname) => {
    const ItemAction = {
      type: "DELETE",
      payload: {
        taskname: taskname,
      },
    };
    dispatchItem(ItemAction);
  };

  const reducerfn = (currentstate, action) => {
    if (action.type === "ADD") {
      return [
        ...currentstate,
        { taskname: action.payload.taskname, date: action.payload.date },
      ];
    } else if (action.type === "DELETE") {
      return currentstate.filter(
        (item) => item.taskname !== action.payload.taskname
      );
    }
    return currentstate;
  };

  return (
    <AllItemsContext.Provider
      value={{
        Items: Items,
        addItem: addItems,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </AllItemsContext.Provider>
  );
};
export default contextProvider;
