import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import {useState} from "react";

const Layout = (props) => {

    const [showSideDrawer, setShowSideDrawer] = useState(true);

    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false);
    }

    const sideDrawerToggleHandler = () => {
        setShowSideDrawer((showSideDrawer) => {return !showSideDrawer});
    }

    return (
        <>
            <div>
               <Toolbar drawToggleClicked={sideDrawerToggleHandler}/>
               <SideDrawer closed={sideDrawerClosedHandler}
                           open={showSideDrawer}/>
            </div>
            <main className="Content">
                {props.children}
            </main>
        </>
    )
};

export default Layout;