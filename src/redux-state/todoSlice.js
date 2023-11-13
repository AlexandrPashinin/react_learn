import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  todos:[]
}


export const todoSlice = createSlice({
  name:'todo',
  initialState,
  reducers:{
    addTodo:(state,action)=> {
      state.todos.push(action.payload) 
    },
    removeTodo:state=> {
      state.todos.pop()
    },
    removeAllTodo: (state,action)=>{
      if(state.todos){
          state.todos.length = null 
      }
    }    
  }
})


export const  { addTodo, removeTodo,removeAllTodo} = todoSlice.actions
export default todoSlice.reducer
