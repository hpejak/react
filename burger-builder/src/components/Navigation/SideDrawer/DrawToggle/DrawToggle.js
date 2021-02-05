import style from './DrawToggle.module.css'

const drawToggle = (props) => {
    return (
    <div onClick={props.clicked} className={style.DrawerToggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
    );
}

export default drawToggle;