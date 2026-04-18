import Header from "../header/Header";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


import { NavLink } from "react-router-dom";
import { DevTool } from "@hookform/devtools";

import { useState, useEffect } from "react";


function Blog() {
    
  const [blogg, setBlogg] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://127.0.0.1:8000/blogs/");
      const data = await response.json();
      setBlogg(data);
    };

    getData();
  }, []);

  return (
    <div style={{margin:"0", padding:"0"}}>
       <Grid container>
       <Grid item size={{xs: 12, sm: 12, md: 12, lg: 12 }}>        
      <Header />
      </Grid>
      </Grid>
       <Grid container>
       <Grid item size={{xs: 12, sm: 12, md: 12, lg: 12 }} style={{display: "flex", backgroundColor: "rgb(2, 149, 76)", width: "100%" }}>
        <div style={{width: "100%"}}>
            <h1 style={{color: "white", fontSize: "4vw", fontWeight: 700, fontFamily: "arial"}}>
               <center>Blog by Vogue Technics</center> 
            </h1>
        
        {blogg.map((b) => (

            <Grid container>
       <Grid item size={{xs: 6, sm: 6, md: 6, lg: 6 }} >
         <NavLink to={`/blog/${ b.slug}`}  >
        <img src={b.image_url} alt={b.title} style={{ width: "100%" }} />
        </NavLink>
        <br /><br />
        
       </Grid>
        <Grid item size={{xs: 6, sm: 6, md: 6, lg: 6 }} >
        <div style={{ margin: "0 1.5vw 0 1.5vw", fontSize:"1.5vw", fontWeight:"bold", color:"white",fontFamily:"arial"}}>
                {b.title}
        </div>
        <div style={{ margin: "1.5vw 1.5vw 0 1.5vw", fontSize:"1vw", fontWeight:"italic", color:"white",fontFamily:"arial"}}>
                {b.meta_description}
        </div>
        <br /><br />
        
       </Grid>
       </Grid>
       
       

        //  <p></p>
        // <p>{b.slug}</p>
        //    <p>{b.excerpt}</p>
           
        
        // </div>
     ))} 
        </div>

  <div>

 
  </div>
      </Grid>
      </Grid>
     
    </div>
  );
}
export default Blog;