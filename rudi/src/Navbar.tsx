import {Button, Nav, OverlayTrigger, Tooltip} from "react-bootstrap";
import {useContext} from "react";
import {MenuContext} from "./Rudi";

const Navbar = () => {

    const {removeMenuItem, changeItemDescription, menuRootItems} = useContext(MenuContext);

    return (
        <div>
            <Nav defaultActiveKey="item1" className="flex-column">
                {
                    menuRootItems.map((item: any) => {
                        const {id, name, tooltip} = item;

                        return (
                            <Nav.Item>
                                <Nav.Link key={id} className="menuListItem" href={name}>
                                    <Button size="sm" variant="link">{name}</Button>
                                    <OverlayTrigger placement="top" overlay={<Tooltip id={id}>{tooltip}</Tooltip>}>
                                        <Button variant="link" size="sm" onClick={() => removeMenuItem(id)}>D</Button>
                                    </OverlayTrigger>
                                    <Button variant="link" size="sm"
                                            onClick={() => changeItemDescription(item)}>C</Button>
                                </Nav.Link>
                            </Nav.Item>
                        )
                    })
                }
                {/*<NavDropdown id="dropdownDemo" title="demo">*/}
                {/*    <NavDropdown.Item eventKey="4.1">Test</NavDropdown.Item>*/}
                {/*</NavDropdown>*/}
            </Nav>
        </div>
    )
}


export default Navbar;