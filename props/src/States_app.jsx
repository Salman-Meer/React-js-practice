import { useState } from 'react';
function States_app(){
    
const [index,setIndex] = useState(1)
 
const handleindex = () => {
    
    setIndex(index+1)

}
return (
    <>
    
<button onClick={handleindex}>click me</button>
<h2>{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}<br></br>
   {index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}<br></br>
   {index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}<br></br>
   {index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}<br></br>
   {index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}{index}<br></br>
    </h2></>

)

}
export default States_app
