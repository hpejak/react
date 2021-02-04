import Aux from '../../hoc/Auxiliary';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => {

    return (
        <Aux>
            <div>
               <Toolbar />
            </div>
            <main className="Content">
                {props.children}
            </main>
        </Aux>
    )
};

export default layout;