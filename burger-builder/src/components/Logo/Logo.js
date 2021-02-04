import burgerLogo from '../../assets/images/burger-logo.png'
import style from './Logo.module.css'

const logo = () => {
    return (
        <div className={style.Logo}>
            <img src={burgerLogo} alt="Burger" />
        </div>
    );
};

export default logo;