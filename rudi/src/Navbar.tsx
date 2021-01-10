import {Nav,OverlayTrigger,Tooltip} from "react-bootstrap";
import {useContext} from "react";
import {MenuContext} from "./Rudi";

const Navbar = () => {

    const {menuRootItems} = useContext(MenuContext);

    return (
        <div>
            <Nav defaultActiveKey="item1" className="flex-column">
                {
                    menuRootItems.map((item: any) => {
                        const {id, name, tooltip} = item;

                        return (
                            <Nav.Item>
                                <Nav.Link key={id} className="menuListItem" href={name}>
                                    <OverlayTrigger placement="top" overlay={<Tooltip id={id}>{tooltip}</Tooltip>}>
                                        <div>{name}</div>
                                    </OverlayTrigger>
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