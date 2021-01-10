import Navbar from './Navbar'
import {Button, Col, Container, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import Core from "./Core";
import Budget from "./components/Budget/Budget";
import Additions from "./Additions";
import Finance from "./components/Finance/Finance";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


const menuItems = [
    {id: 1, name: "Core", tooltip: "First Item", description: "None for now"},
    {id: 2, name: "Additions", tooltip: "Second Item", description: "None for now"},
    {id: 3, name: "Finance", tooltip: "Third Item", description: "None for now"}
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
                        <Navbar />
                    </Col>
                    <Col xl={{span: 8}}>
                        <div className="middleCol">
                            <Router>
                                <Route path='/core'>
                                    <Core/>
                                </Route>
                                <Route path='/additions'>
                                    <Additions/>
                                </Route>
                                <Route path='/finance'>
                                    <Finance/>
                                </Route>
                            </Router>
                        </div>
                    </Col>
                    <Col xl={{span: 2}}>
                        <Budget/>
                    </Col>
                </Row>
            </Container>
        </MenuContext.Provider>
    )
}

export default Rudi;