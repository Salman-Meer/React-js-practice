
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./blog/Blog";
import Blog_details from "./blog/Blog_details";
import Home from "./Home";
function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Blog_details />} />

        </Routes>
      </BrowserRouter>
      
      
    
    </>
  )
}

export default App
