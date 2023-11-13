import { useState } from "react";


const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];
const RenderClick = () => {

  const [click, setClick] = useState(false)

  const product  =  products.map(element=><div 
    key={element.id} 
    style={{color:element.isFruit
      ? 'black'
      : 'red'
    }}
    > {element.title} </div>  )
 

  return (  
    <>
    {click && product }

    
    <button  onClick={()=>setClick(!click)} > click me </button>

    </>


   );
}
 
export   default RenderClick