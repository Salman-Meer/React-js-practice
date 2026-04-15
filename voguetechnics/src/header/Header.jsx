import Logo from "./logo";
import ContactNumber from "./ContactNumber";
import Menus from "./Menus";
// import Banner from "./banner";
function Header() {
    return (
        
            <div className="container-fluid">
                <div className="row">
                    <div className="container">
                <div className="row" style={{ marginTop: "13px" }}>
                    
                    <div className="col-2">
                        <Logo />
                    </div>
                    <div className="col-1"></div>
                    <div className="col-3">
                        <ContactNumber />
                </div>
                
                <div className="col-1"></div>

                <div className="col-4"><Menus />
                <div className="col-1"></div>
                
                </div>
               </div>
                </div>
               
                </div>
                 <div className="row">
                    <div className="col-12">
                   
                    </div>
            </div>

            </div>
            
       
    );
}
export default Header;

