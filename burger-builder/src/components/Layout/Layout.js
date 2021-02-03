import Aux from '../../hoc/Auxiliary'
import './Layout.css'

const layout = (props) => {

    return (
        <Aux>
            <div>
                Toolbar, SideDrawer, Backdrop
            </div>
            <main className="Content">
                {props.children}
            </main>
        </Aux>
    )
};

export default layout;