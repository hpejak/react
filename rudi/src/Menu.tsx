import {useState} from "react";
import {Button, ListGroup, OverlayTrigger, Tooltip} from "react-bootstrap";

const Menu = () => {

    const menuItems = [
        {id: 1, name: "item1", tooltip: "First Item", description: "None for now"},
        {id: 2, name: "item2", tooltip: "Second Item", description: "None for now"},
        {id: 3, name: "item3", tooltip: "Third Item", description: "None for now"}
        ];

    const [menuRootItems, setMenuRootItems] = useState(menuItems);

    const removeMenuItem = (id) => {
        setMenuRootItems(menuRootItems.filter((menuRootItem) => menuRootItem.id !== id));
    }

    const changeItemDescription = (item) => {

        setMenuRootItems((startRootItems) => {

            const replacementIndex: number = startRootItems.findIndex((menuRootItems) => menuRootItems.id === item.id);
            const newMenuItem = {...item, description: 'Still no description'};

            return [...startRootItems.slice(0, replacementIndex), newMenuItem, ...startRootItems.slice(replacementIndex + 1)]

        })

    }

    return (
        <div>
            <ListGroup>
            {
                menuRootItems.map((item: any) => {
                    const {id, name, tooltip} = item;

                    return (
                        <ListGroup.Item key={id} className="menuListItem">
                            <Button variant="link" >{name}</Button>
                            <OverlayTrigger placement="top" overlay={<Tooltip id={id}>{tooltip}</Tooltip>}>
                                <Button variant="link" size="sm" onClick={() => removeMenuItem(id)}> Del </Button>
                            </OverlayTrigger>
                            <Button variant="link" size="sm" onClick={() => changeItemDescription(item)}> Cha </Button>
                        </ListGroup.Item>
                    )
                })
            }
            </ListGroup>
        </div>
    )
}


export default Menu;