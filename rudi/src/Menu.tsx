import {Button, ListGroup, OverlayTrigger, Tooltip} from "react-bootstrap";

const Menu = ({menuRootItems, removeMenuItem, changeItemDescription}) => {


    return (
        <div>
            <ListGroup>
                {
                    menuRootItems.map((item: any) => {
                        const {id, name, tooltip} = item;

                        return (
                            <ListGroup.Item key={id} className="menuListItem">
                                <Button variant="link">{name}</Button>
                                <OverlayTrigger placement="top" overlay={<Tooltip id={id}>{tooltip}</Tooltip>}>
                                    <Button variant="link" size="sm" onClick={() => removeMenuItem(id)}>D</Button>
                                </OverlayTrigger>
                                <Button variant="link" size="sm" onClick={() => changeItemDescription(item)}>C</Button>
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
        </div>
    )
}


export default Menu;