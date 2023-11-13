import { useEffect } from "react";
import { useNavigate ,useSearchParams ,useParams , Link } from "react-router-dom";
const SinglePage = () => {
  const {us} = useParams()
  const [searchParam,setSearchParam ] = useSearchParams()
  const navigate = useNavigate()
  const goBack = () => navigate(-1) 
  const username = searchParam.get('username')

  useEffect(()=>{
    setSearchParam({username:'aletrtx'})
  },[us, setSearchParam])

  return (
  <>
    <button onClick={goBack} > back  </button>
    <button ><Link to='/main' > main </Link> </button>
    <p>name user: {username}</p>
    
    {us}
  </>
   );
}
 
export  {SinglePage};