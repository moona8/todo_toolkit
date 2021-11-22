import react, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  deleteTodo,
  deleteAll,
  editTodo,
  saveTodo,
} from "../redux/todo";

function Todo() {
  // const {todo}=useSelector((state)=>state.todo) //destructure
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [inputval, setInputval] = useState("");
  const [update, setUpdate] = useState([]);
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
              editMode: false,
            })
          );
        }}
      >
        Add Item
      </button>
      <ul>
        {/* 
          AND &&
            1 1 1
            1 0 0
            0 1 0
            0 0 0

            OR ||
            1 1 1
            1 0 1
            0 1 1
            0 0 0
          */}
        {todos.map((todo, i) => {
          return (
            <li key={i}>
              {todo.editMode ? (
                <input
                  value={update[i]}
                  onChange={(e) => {
                    const newTodos = [...update];
                    newTodos[i] = e.target.value;
                    setUpdate(newTodos);
                  }}
                />
              ) : (
                <>
                  {todo.val}
                  <button
                    onClick={() => {
                      dispatch(deleteTodo(i));
                    }}
                  >
                    Delete
                  </button>
                </>
              )}
              {/* {!todo.editMode && (
                <button
                  onClick={() => {
                    dispatch(deleteTodo(i));
                  }}
                >
                  Delete
                </button>
              )} */}

              <button
                onClick={() => {
                  if (!todo.editMode) {
                    const newTodos = [...update];
                    newTodos[i] = todo.val;
                    setUpdate(newTodos);
                  }

                  dispatch(
                    todo.editMode
                      ? saveTodo({ todoIndex: i, value: update[i] })
                      : editTodo(i)
                  );
                }}
              >
                {todo.editMode ? "save" : "edit"}
              </button>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
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
