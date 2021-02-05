import style from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawToggle from '../SideDrawer/DrawToggle/DrawToggle'

const toolbar = (props) => {

    return (
      <header className={style.Toolbar}>
          <DrawToggle clicked={props.drawToggleClicked} />
          <Logo height="80%"/>
          <nav className={style.DesktopOnly}>
              <NavigationItems />
          </nav>

      </header>
    );

};

export default toolbar;