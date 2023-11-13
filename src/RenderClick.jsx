import { useEffect } from "react";
import { useState } from "react";



const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];
const RenderClick = () => {


  const [click, setClick] = useState(false)
  const [ one , setOne] = useState(null)

  
  const fetchFake =  () =>{
    const resp =  fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=> setOne(json))
      
  } 

 console.log(one);
 
  useEffect(()=>{
    fetchFake()
  },[])

   
   
  
 

  return (  
    <>
    {click && one && one.map(element=><div 
        key={element.id} 
        style={{color:element>20
          ? 'black'
          : 'red'
        }}
        > {element.title} </div>)}

    
    <button  onClick={()=>setClick(!click)} > click me </button>

    </>


   );
}
 
export   default RenderClick