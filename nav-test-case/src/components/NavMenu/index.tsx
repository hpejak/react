import {useState} from "react";
import {Nav} from "react-bootstrap";

const NavMenu = (props: any) => {
    const {navItems} = props;
    const [activeNav, setActiveNav] = useState('first')

    const handleClick = (eventKey: any) => setActiveNav(eventKey);

    console.log(activeNav)

    return (
        <div>
            <Nav
                defaultActiveKey="home"
                className="flex-column"
                activeKey={activeNav}
                variant="pills"
                navbar={true}
                onSelect={handleClick}
            >
            { navItems.map((item: any) => {
                const {id, link, name} = item;

                    return (
                        <Nav.Item key={id}>
                            <Nav.Link href={link}
                                      eventKey={link}>
                                {name}
                            </Nav.Link>
                        </Nav.Item>
                    );
                })}
            </Nav>
        </div>
    );
}

export default NavMenu;