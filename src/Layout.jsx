import { NavLink,Outlet } from "react-router-dom"
import { Toolbar,AppBar,Button,Paper, Typography,  } from "@mui/material";
import { Box } from "@mui/system";
import { ThemeProvider } from "@mui/material/styles";
import ToggleSwitch from "./ToggleSwitch";
import { darkTheme, lightTheme } from './theme'
const Layout = () => {

const styleMainButton = {
  color: 'white ',
  
}

  const setActive = ({isActive}) => isActive && 'active-link' 
  return (
    <>
    <AppBar>
      <Toolbar>
        <Box> 
          <Button> <NavLink to='/' className={setActive} > home </NavLink> </Button> 
          <Button> <NavLink to='/about' className={setActive}  > about </NavLink> </Button> 
          <Button style= {styleMainButton}  > <NavLink to='/main'> main  </NavLink> </Button> 
          <ToggleSwitch/> 
        </Box>
      </Toolbar>  
    </AppBar> 
    
      <Outlet/>
   
   
  </>
  );
}
 
export {Layout};