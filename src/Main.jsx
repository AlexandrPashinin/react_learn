import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo,removeAllTodo } from "./redux-state/todoSlice";
import Button from '@mui/material/Button';
import { Box } from "@mui/system";

const Main = () => {

  const todos  = useSelector( state=>state.todo.todos)

  console.log(todos);
  const dispatch = useDispatch()

  const asyncADDTodo = () =>{
    return async dispatchAsync =>{
      setTimeout(()=>{
        dispatch(addTodo('async todo'))
      }, 1000)
      
    }
   
  }

  return (
  <Box  sx={{mt:10}}  >
     
     
    <Button variant='contained' sx={{mr:3, ml:3 }} onClick={()=>dispatch(addTodo(prompt()))} > add </Button>
    <Button variant='contained' sx={{mr:3}} onClick={()=>dispatch(removeTodo())} > remove  </Button>
    <Button variant='contained' sx={{mr:3}} onClick={()=>dispatch(removeAllTodo())} > remove  all </Button>
    <Button variant='contained'  onClick={()=>dispatch(asyncADDTodo())} > add async  </Button>
    <ul>
      {todos.map(item => <li key={item } > {item } </li>)} 
    </ul>
  </Box>
   );
}
 
export {Main}
    
  