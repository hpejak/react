import Menu from './Menu'
import {Button, Col, Container, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import Core from "./Core";
import Budget from "./Budget";
import Additions from "./Additions";
import Finance from "./Finance";

const menuItems = [
    {id: 1, name: "item1", tooltip: "First Item", description: "None for now"},
    {id: 2, name: "item2", tooltip: "Second Item", description: "None for now"},
    {id: 3, name: "item3", tooltip: "Third Item", description: "None for now"}
];

export const MenuContext = React.createContext<any | null>(null);

const Rudi = () => {

    const [menuRootItems, setMenuRootItems] = useState(menuItems);
    const [ rootName, setRootName ] = useState('Rudi');
    const [ windowSize, setWindowSize ] = useState(window.innerWidth);
    let greeting = 'Hi, I am ' + rootName;

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

    const onStart = () => {
        rootName === 'Start' ? setRootName('Rudi') : setRootName('Start')
    }

    useEffect(() => {
        if (rootName !== '') document.title = rootName;
    }, [rootName]);

    useEffect(() => {
        window.addEventListener('resize', () => {setWindowSize(window.innerWidth)});
        console.log('Window size is ' + windowSize)

        return () => {
            window.removeEventListener('resize', () => {setWindowSize(window.innerWidth)})
        }
    })

    return (
        <MenuContext.Provider value={{removeMenuItem, changeItemDescription, menuRootItems}}>
            <Container fluid="xl">
                <Row className="titleRow">
                    <Col xl={{span: 3, offset: 3}}>
                        <h1>
                            {greeting}
                        </h1>
                    </Col>
                    <Col className="titleCol">
                        <Button className="titleBtn" onClick={onStart}>Let's Start</Button>
                    </Col>
                </Row>
                <Row>
                    <Col xl={{span: 2}} className="menuCol">
                        <Menu />
                    </Col>
                    <Col xl={{span: 7}}>
                        <div className="middleCol">
                            {rootName !== 'Rudi' && <Core/>}
                            {rootName !== 'Rudi' && <Additions/>}
                            {<Finance/>}
                        </div>
                    </Col>
                    <Col xl={{span: 3}}>
                        <Budget/>
                    </Col>
                </Row>
            </Container>
        </MenuContext.Provider>
    )
}

export default Rudi;