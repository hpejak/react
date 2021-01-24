import {Nav} from "react-bootstrap";
import {useContext, useState} from "react";
import {MenuContext} from "./Rudi";
import {Link} from "react-router-dom";

const NavMenu = () => {

    const {menuRootItems} = useContext(MenuContext);

    const [activeNav, setActiveNav] = useState('/')

    const handleClick = (eventKey: any) => setActiveNav(eventKey);

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
                                    to={link}
                                    >
                                        {name}
                                </Nav.Link>
                            </Nav.Item>
                        )
                    })
                }

            </Nav>
        </div>
    )
}


export default NavMenu;