import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";


function App() {
  // let initialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     date: "4/7/2024",
  //   },
  //   {
  //     name: "Go To College",
  //     date: "4/7/2024",
  //   },
  //   {
  //     name: "Like the video",
  //     date: "7/7/24",
  //   },
  // ];
  const [todoItems, setToDoItems] = useState([]);
  const handleNewItem = (itemName, itemDuedate) => {
    console.log(`New Item added:${itemName} Date:${itemDuedate}`);
    const newTodoItems = [
      ...todoItems,
      {
        name: itemName,
        date: itemDuedate,
      },
    ];
    setToDoItems(newTodoItems);
  };
  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name != todoItemName);
    setToDoItems(newTodoItems);
    console.log(`Item deleted:${todoItemName}`);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddToDo onNewItem={handleNewItem} />
      {/* <WelcomeMessage></WelcomeMessage> */}
      {todoItems.length == 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
