import {useState} from "react";
import {Button, OverlayTrigger, Tooltip} from "react-bootstrap";

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

        const replacementIndex: number = menuRootItems.findIndex((menuRootItems) => menuRootItems.id === item.id);
        const newMenuItem = {...item, description: 'Still no description'};

        const newMenuItems = [...menuRootItems.slice(0, replacementIndex), newMenuItem, ...menuRootItems.slice(replacementIndex + 1)]

        setMenuRootItems(newMenuItems);

    }

    return (
        <div>
            {
                menuRootItems.map((item: any) => {
                    const {id, name, tooltip} = item;

                    return (
                        <li key={id} className="menuListItem">
                            {name}
                            <OverlayTrigger placement="top" overlay={<Tooltip id={id}>{tooltip}</Tooltip>}>
                                <Button variant="link" size="sm" onClick={() => removeMenuItem(id)}> Del </Button>
                            </OverlayTrigger>
                            <Button variant="link" size="sm" onClick={() => changeItemDescription(item)}> Change </Button>
                        </li>
                    )
                })
            }
        </div>
    )
}


export default Menu;