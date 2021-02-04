import burgerLogo from '../../assets/images/burger-logo.png'
import style from './Logo.module.css'

const logo = ({height}) => {

    return (
        <div className={style.Logo} style={{height: height}}>
            <img src={burgerLogo} alt="Burger" />
        </div>
    );
};

export default logo;