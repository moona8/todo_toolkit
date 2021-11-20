import react, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, deleteAll } from "../redux/todo";

function Todo() {
  // const {todo}=useSelector((state)=>state.todo) //destructure
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [inputval, setInputval] = useState("");
  const [count, setcount] = useState(0);

  //   console.log(todos);
  //   useEffect(() => {
  //       console.log("count")
  //     setInterval(() => {
  //       setcount(count + 5);
  //     }, 2000);
  //   },[count]);

  return (
    <div>
      <h1>TODO (toolkit)</h1>
      <input value={inputval} onChange={(e) => setInputval(e.target.value)} />
      <button
        onClick={() => {
          dispatch(
            addTodo({
              val: inputval,
              key: "item" + Math.floor(Math.random() * 100000),
            })
          );
        }}
      >
        Add Item
      </button>
      <ul>
        {todos.map((todo, i) => {
          return (
            <li key={i}>
              {todo.val}
              <button
                onClick={() => {
                  dispatch(deleteTodo(i));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      <button
        onclick={() => {
          dispatch(deleteAll());
        }}
      >
        DeleteAll
      </button>
      {/* <p>{count}</p> */}
    </div>
  );
}
export default Todo;
