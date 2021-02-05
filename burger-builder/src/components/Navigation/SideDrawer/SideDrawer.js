import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import style from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'

const sideDrawer = (props) => {

    let activeClasses = props.open ? [style.SideDrawer, style.Open] : [style.SideDrawer, style.Close]

    return(
        <>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={activeClasses.join(' ')} >
                <div  style={{marginBottom:'50px', height:"11%"}}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </>
    );
}

export default sideDrawer;