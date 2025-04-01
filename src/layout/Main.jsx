import { Outlet } from "react-router-dom";
import Hader from "../component/Hader/Hader";
import Footer from "../component/Footer/Footer";


const Main = () => {
    return (
        <div className="max-w-5xl mx-auto">
         <Hader></Hader>
         <Outlet></Outlet>
         <Footer></Footer>
        </div>
    );
};

export default Main;