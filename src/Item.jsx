const Item = ({name , check}) => {
  return (
   <>
    <li>
      {name}{check &&  ' ✔'} 
    </li>
  </>
   );
}
 
export default Item;