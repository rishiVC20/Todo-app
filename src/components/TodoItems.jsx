import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.date}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}

      {/* <TodoItem todoName="Go To College" todoDate="4/7/2024"></TodoItem> */}
    </div>
  );
};

export default TodoItems;
