import {Nav} from "react-bootstrap";
import {useContext} from "react";
import {MenuContext} from "./Rudi";

const NavMenu = () => {

    const {menuRootItems, activeNav} = useContext(MenuContext);

    // console.log(activeNav)
    //
    // const handleActiveNav = (e) => {
    //     setActiveNav(e)
    // }

    return (
        <div>
            <Nav
                className="flex-column"
                variant="pills"
                activeKey={activeNav}
                // onSelect={handleActiveNav}
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