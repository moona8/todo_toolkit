import { createSlice } from "@reduxjs/toolkit";
import todo from "../components/todo";

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    todos: [],
  },

  reducers: {
    addTodo: (state, action) => {
        console.log(action)
      state.todos.push(action.payload)
    },
    deleteTodo: (state, action) => {
        // const {recordIndex} = action.payload;
        state.todos.splice(action.payload,1)
      },
      deleteAll:(state)=>{
          state.todos=[]
        console.log(state)
      },
      editTodo:(state,action)=>{
        state.todos[action.payload].editMode=true
      },
      saveTodo:(state,action)=>{
        state.todos[action.payload.todoIndex].editMode=false
        state.todos[action.payload.todoIndex].val=action.payload.value
      }
  },
});


export const { addTodo,deleteTodo ,deleteAll,editTodo,saveTodo} = todoSlice.actions;
export default todoSlice.reducer;
