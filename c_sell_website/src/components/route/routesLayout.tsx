import {Outlet} from "react-router";
import Navbar from "../navigation/navigation";
import Footer from "../common/footer";

const RoutesLayout = () => {
    return (
        <div className="App" >
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
};


export default RoutesLayout;