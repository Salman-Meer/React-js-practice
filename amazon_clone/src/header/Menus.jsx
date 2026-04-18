
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";

function Menus(){

    return (
        <>
    <Grid container>
      <Grid item size={{xs: 12, sm: 12 , md: 12 , lg: 12 }}>
        
      <Box style={{ display: "flex", gap: 20 }}>
            <Button  sx={{ fontSize: "clamp(5px, 1vw, 14px)", color: "#fff", p: 0, minWidth: 0,border: "1px solid #2d3d4d", "&:hover": {border: "1px solid white"} }}><MenuIcon style={{color:"white", marginLeft:"10px"}}/>All</Button>
            <Button  sx={{ fontSize: "clamp(5px, 1vw, 14px)", color: "#fff", p: 0, minWidth: 0 ,border: "1px solid #2d3d4d", "&:hover": {border: "1px solid white"}}}>Today's Deals</Button>
            <Button  sx={{ fontSize: "clamp(5px, 1vw, 14px)", color: "#fff", p: 0, minWidth: 0 ,border: "1px solid #2d3d4d", "&:hover": {border: "1px solid white"}}}>Gift Cards</Button>
            <Button  sx={{ fontSize: "clamp(5px, 1vw, 14px)", color: "#fff", p: 0, minWidth: 0 ,border: "1px solid #2d3d4d", "&:hover": {border: "1px solid white"}}}>Sell</Button>
            <Button  sx={{ fontSize: "clamp(5px, 1vw, 14px)", color: "#fff", p: 0, minWidth: 0 ,border: "1px solid #2d3d4d", "&:hover": {border: "1px solid white"}}}>Registry</Button>
            <Button  sx={{ fontSize: "clamp(5px, 1vw, 14px)", color: "#fff", p: 0, minWidth: 0 ,border: "1px solid #2d3d4d", "&:hover": {border: "1px solid white"}}}>Prime Video</Button>
            <Button  sx={{ fontSize: "clamp(5px, 1vw, 14px)", color: "#fff", p: 0, minWidth: 0 ,border: "1px solid #2d3d4d", "&:hover": {border: "1px solid white"}}}>Customer Service</Button>
          </Box>
      
      </Grid>
    </Grid>
        </>
    )

}
export default Menus



