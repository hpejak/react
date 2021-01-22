import {Nav} from "react-bootstrap";
import {useContext, useState} from "react";
import {MenuContext} from "./Rudi";

const Navbar = () => {

    const {menuRootItems} = useContext(MenuContext);
    const [activeNav, setActiveNav] = useState('core')

    const handleNavClick =(e) => {
        console.log(e.target.value)
        setActiveNav(e.target.value);
    }

    console.log(activeNav)

    return (
        <div>
            <Nav
                className="flex-column"
                variant="pills"
                activeKey={activeNav}>
                {
                    menuRootItems.map((item: any) => {
                        const {id, name, link} = item;

                        return (
                            <Nav.Item key={id}>
                                <Nav.Link
                                    className="menuListItem"
                                    href={link}
                                    onClick={() => handleNavClick}>
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


export default Navbar;