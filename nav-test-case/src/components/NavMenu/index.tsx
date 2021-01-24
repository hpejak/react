import {useState} from "react";
import {Nav} from "react-bootstrap";

const NavMenu = (props: any) => {
    const {navItems} = props;
    const [activeNav, setActiveNav] = useState('/home')

    return (
        <>
            <Nav
                activeKey={activeNav}
                variant="pills"
            >
            { navItems.map((item: any) => {
                const {id, link, name} = item;

                    return (
                        <Nav.Item key={id}>
                            <Nav.Link href={link} eventKey={link}>
                                {name}
                            </Nav.Link>
                        </Nav.Item>
                    );
                })}
            </Nav>
        </>
    );
}

export default NavMenu;