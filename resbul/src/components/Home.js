import { Link, Outlet } from "react-router-dom";
import Button from "@material-ui/core/Button";
 
 
function Home() {
 return (
   <div>
    <h1 style={{color:" black"}}>templates</h1>


<p style={{color: "black"}}>Use template button below for filling form</p>
     
       <Link to="usetemplate">
       <span style={{ marginRight: "20px" }}>
        
       <Button variant="contained" color="primary">UseTemplate</Button>
  
        
       </span>
</Link>

   
     <img
            src="https://reallygooddesigns.com/wp-content/uploads/2022/03/Free-Multipurpose-Resume-Template-for-InDesign-by-Erick-Ragas.png"
            alt=""
        />
     
   </div>
     
 );
}
 
export default Home;