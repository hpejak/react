import style from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = () => {

    return (
      <header className={style.Toolbar}>
          <div>MENU</div>
          <Logo />
          <nav>
              <NavigationItems />
          </nav>

      </header>
    );

};

export default toolbar;