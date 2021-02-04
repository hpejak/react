import styles from './Button.module.css'

const button = (props) => {
    return (
        <button className={[styles.Button, styles[props.btnTypes]].join(' ')} onClick={props.clicked}>
            {props.children}
        </button>
    );
};
export default button;