
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Language from './Language';
import HelloSignin from './HelloSignin'
import ReturnOrder from './ReturnOrder'
import Logo from './logo';
import Deliver from './Deliver';
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import Search from './Search';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Cart_icon from './Cart_icon';
import Menus from './Menus'
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";

function Header(){

    return (
        <>
      <Grid container>
             <Grid item size={{xs: 1, sm: 1 , md: 1 , lg: 1}}>
             <Logo />
      </Grid>
      <Grid item size={{xs: 1, sm: 1 , md: 1 , lg: 1}}>
            <Deliver />
      </Grid>

      <Grid item size={{xs: 6, sm: 6 , md: 6 , lg: 6}}>
            <Search />
      </Grid>
      <Grid item size={{xs: 1, sm: 1 , md: 1 , lg: 1}}>
            <Language />
      </Grid>
      <Grid item size={{xs: 1, sm: 1 , md: 1 , lg: 1}}>
            <HelloSignin />
      </Grid>
      <Grid item size={{xs: 1, sm: 1 , md: 1 , lg: 1}}>
            <ReturnOrder />
      </Grid> 
      <Grid item size={{xs: 1, sm: 1 , md: 1 , lg: 1}}>
            <Cart_icon/>
      </Grid>
      
      </Grid>
      <Grid container style={{backgroundColor:"#2d3d4d"}}>
             <Grid item size={{xs: 12, sm: 12 , md: 12 , lg: 12}}>
             <Menus />
      </Grid>
      </Grid>

        </>
    )

}
export default Header