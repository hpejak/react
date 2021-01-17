import {Nav, Overlay, Tooltip} from "react-bootstrap";
import {useContext, useRef, useState} from "react";
import {MenuContext} from "./Rudi";

const Navbar = () => {

    const {menuRootItems} = useContext(MenuContext);
    const [show, setShow] = useState(false);
    const target=useRef(null);

    return (
        <div>
            <Nav defaultActiveKey="item1" className="flex-column">
                {
                    menuRootItems.map((item: any) => {
                        const {id, name, tooltip} = item;

                        return (
                            <div key={id}>
                                <Nav.Item >
                                    <Nav.Link className="menuListItem" href={name} ref={target} onMouseEnter={()=>setShow(!show)}>
                                        {/*<OverlayTrigger placement="top" overlay={<Tooltip id={id}>{tooltip}</Tooltip>}>*/}
                                            <div>{name}</div>
                                        {/*</OverlayTrigger>*/}
                                    </Nav.Link>
                                </Nav.Item>

                                <Overlay target={target.current} show={show}>
                                    <Tooltip id={id}>{tooltip}</Tooltip>
                                </Overlay>
                            </div>
                        )
                    })
                }

            </Nav>
        </div>
    )
}


export default Navbar;