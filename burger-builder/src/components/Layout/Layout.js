import Aux from '../../hoc/Auxiliary';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const layout = (props) => {

    return (
        <Aux>
            <div>
               <Toolbar />
               <SideDrawer />
            </div>
            <main className="Content">
                {props.children}
            </main>
        </Aux>
    )
};

export default layout;