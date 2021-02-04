import styles from './Modal.module.css'
import Auxiliary from '../../../hoc/Auxiliary'
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => {

    const {children, show} = props;

    return (
        <Auxiliary>
            <Backdrop show={show} clicked={props.modalClosed}/>
            <div className={styles.Modal}
                 style={{transform: show ? 'translateY(0)': 'translateY(-100vh)', opacity: show ? '1': '0'}}>
                {children}
            </div>
        </Auxiliary>
    )
};

export default modal;