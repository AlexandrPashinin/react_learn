import './App.css';
import {Main} from './Main'
import {About} from './About'
import {SinglePage} from './SinglePage'
import {Home} from './Home'
import {Routes , Route, Navigate } from "react-router-dom"
import { Layout } from './Layout' 





function App() { 
   
    
 
  


  return (
    < div className='App'
    
    >
       <Routes>
         <Route path='/' element={<Layout/>} >
            <Route
                index
                element={<Home/>}
              />
            <Route
              path='main' 
              element={<Main/>}
            />
            <Route
              path='about'
              element={<About/>} 
            />
             <Route
              path='about-old'
              element={<Navigate to='/about' replace />} 
            />
             <Route
              path='about/:us'
              element={<SinglePage/>} 
            />
           
            <Route
              path='*'
              element={<Home/>} 
            />
         </Route>  
       </Routes> 
       
    </div>  
     
  );
}

export default App;
