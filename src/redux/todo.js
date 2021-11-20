import { createSlice } from "@reduxjs/toolkit";
import todo from "../components/todo";

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    todos: [],
  },
  
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload)
    },
    deleteTodo: (state, action) => {
        // const {recordIndex} = action.payload;
        state.todos.splice(action.payload,1)
      },
      deleteAll:(state)=>{
          state.todos=[]
        // console.log("OK")
      }
  },
});


export const { addTodo,deleteTodo ,deleteAll} = todoSlice.actions;
export default todoSlice.reducer;
