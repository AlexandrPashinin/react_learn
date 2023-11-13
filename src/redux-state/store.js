import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import todoSlice from './todoSlice'
import themeSlice from './themeSlice'

export const store = configureStore({
  reducer: {
    counter:counterReducer,
    todo:todoSlice,
    theme:themeSlice
     
    
  }
})    


