import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux-state/counterSlice';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { useEffect } from 'react';

const Home = () => {

const count  =  useSelector(state=>state.counter.value)


  useEffect(()=>{
    console.log(count)
  },[count])  

const dispatch = useDispatch()
  return (
  <Box sx={{mt:10}} >

    <Button variant='contained'  sx={{mr:3, ml:3,}}  onClick={()=> dispatch(increment())} > Increment</Button>
    {count}
    <Button variant='contained' sx={{ml:2}} onClick={()=> dispatch(decrement())} > Decrement</Button>
    
    

  </Box>
   );
}
 
export  {Home}