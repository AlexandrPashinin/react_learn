import { useEffect } from "react";
import { useState } from "react";




const RenderClick = () => {


  const [click, setClick] = useState(false)
  const [ one , setOne] = useState(null)

  
  const fetchFake =  () =>{
    const resp =  fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=> setOne(json))
      
  } 


  useEffect(()=>{
    fetchFake()
    
  },[])
  

  return (  
    <>
    {click && one && one.map(element=><div 
        key={element.id} 
        style={{color:element>20
          ? 'red'
          : 'black'
        }}
        > {element.title} </div>)}

    
    <button  onClick={()=>setClick(!click)} > click me </button>

    </>


   );
}
 
export   default RenderClick