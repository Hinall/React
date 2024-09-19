import { createContext } from "react";
import { useReducer } from "react";

export const myContext = createContext();

const ContextProvider = ({ children }) => {
  //component

  const reducerfn = (Items_currentValue, action) => {
    if (action.type === "ADD") {
      return [
        ...Items_currentValue,
        { taskname: action.payload.taskname, date: action.payload.date },
      ];
    } else if (action.type === "DELETE") {
      return Items_currentValue.filter(
        (item) => item.taskname !== action.payload.taskname
      );
    }
    return Items_currentValue;
  };

  const [Items, dispatchItem] = useReducer(reducerfn, [
    { taskname: "hello", date: "2/2/22" },
  ]);

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

  const contextValue = {
    Items,
    addItems,
    deleteItem,
  };

  return (
    <myContext.Provider value={contextValue}>{children}</myContext.Provider>
  );
};
export default ContextProvider;
