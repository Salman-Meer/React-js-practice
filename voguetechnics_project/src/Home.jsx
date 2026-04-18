import Header from "./header/Header";
import Footer from "./footer/Footer";
import Banner from "./banner/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./blog/Blog";
function Home() {
 

  return (
     <div style={{margin:"0", padding:"0"}}>
      <Header />
      <Banner />
      <Footer />
      
    
    </div>
  )
}

export default Home
