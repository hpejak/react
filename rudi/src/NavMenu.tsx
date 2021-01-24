import {Nav, NavDropdown} from "react-bootstrap";
import {useContext, useState} from "react";
import {MenuContext} from "./Rudi";
import {Link} from "react-router-dom";

const NavMenu = () => {

    const {menuRootItems, dropdownMenuItems} = useContext(MenuContext);

    const [activeNav, setActiveNav] = useState('/')
    const [activeTutorial, setActiveTutorial] = useState<boolean>(false)

    const handleClick = (eventKey: any) => {
        dropdownMenuItems.find((menuItem) => menuItem.link === eventKey) ? setActiveTutorial(true) : setActiveTutorial(false);
        setActiveNav(eventKey);
    };

    return (
        <div>
            <Nav
                className="flex-column"
                variant="pills"
                activeKey={activeNav}
                onSelect={handleClick}
            >
                {
                    menuRootItems.map((item: any) => {
                        const {id, name, link} = item;

                        return (
                            <Nav.Item key={id}>
                                <Nav.Link
                                    className="menuListItem"
                                    href={link}
                                    eventKey={link}
                                    as={Link}
                                    to={link}>
                                        {name}
                                </Nav.Link>
                            </Nav.Item>
                        )
                    })
                }
                <NavDropdown title="Tutorial" id="dropdown-tutorial" active={activeTutorial}>
                    {dropdownMenuItems.map((item)=>{
                        const {id, name, link} = item;
                        return(
                            <NavDropdown.Item key={id} eventKey={link} as={Link} to={link}>{name}</NavDropdown.Item>
                        )
                    })}

                </NavDropdown>
            </Nav>
        </div>
    )
}


export default NavMenu;