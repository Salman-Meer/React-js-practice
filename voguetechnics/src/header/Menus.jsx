import { InputLabel, Select, MenuItem } from "@mui/material";
function Menus() {
  return (
    
    <div className="menus">

      <div style={{ display: "flex", alignItems: "center"}}>
        <InputLabel style={{ color: "green" }}>Engines</InputLabel>
        <Select
          variant="standard"
          disableUnderline
          
        >
          <MenuItem >RangeRover Angin</MenuItem>
          <MenuItem >Audi Engine</MenuItem>
          <MenuItem >BMW Engine</MenuItem>
          <MenuItem >Jaguar Engine</MenuItem>
        </Select>
      </div>

      <a href="#ancillaries"><InputLabel>Ancillaries</InputLabel> </a>
      <a href="#about"><InputLabel>About</InputLabel></a>
      <a href="#gallery"><InputLabel>Gallery</InputLabel></a>
      <a href="#blog"><InputLabel>Blog</InputLabel></a>
      <a href="#content"><InputLabel>Content</InputLabel></a>

    </div>
  );
}
export default Menus;
