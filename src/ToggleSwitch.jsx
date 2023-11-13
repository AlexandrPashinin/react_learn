import { useSelector,useDispatch  } from "react-redux";
import {  
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";
import {toggleTheme} from './redux-state/themeSlice'

const ToggleSwitch = () => {

  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch()
  return ( 
<div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
      >
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={theme.darkTheme}
                onChange={() => dispatch(toggleTheme())}
              />
            }
            label="Toggle Theme"
          />
         
        </FormGroup>

</div>
 );
}
 
export default ToggleSwitch;