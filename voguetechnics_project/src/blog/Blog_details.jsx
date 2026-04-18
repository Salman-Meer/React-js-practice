// import { useParams } from "react-router-dom";

// function Blog_details() {
//   const { slug } = useParams();

//   console.log(slug);

//   return (
//     <div>
//       <h1>Blog Detail Page</h1>
//       <p>Slug: {slug}</p>
//     </div>
//   );
// }

// export default Blog_details;

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Header from "../header/Header";
import "../App.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Blog_details() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `http://127.0.0.1:8000/blogs/${slug}/`
      );
      const data = await res.json();
      setBlog(data);
    };

    getData();
  }, [slug]);

  return (
    <div>
        <Grid container>
       <Grid item size={{xs: 12, sm: 12, md: 12, lg: 12 }}>        
      <Header />
      </Grid>
       <Grid item size={{xs: 12, sm: 12, md: 12, lg: 12 }}  style={{backgroundColor: "rgb(2, 149, 76)"}}> 
      
      {blog ? (
        <>
          <h1 style={{color:"white"}}>{blog.title}</h1>
          
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.content }} />
        </>
      ) : (
        <p>Loading...</p>
      )}
      </Grid>
      </Grid>
    </div>
  );
}
export default Blog_details;