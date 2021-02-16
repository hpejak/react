import NavMenu from './NavMenu'
import { Col, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import Core from "./Core";
import Additions from "./Additions";
import Finance from "./components/Finance/Finance";
import Error from "./components/Error/"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import BudgetDetail from "./components/Budget/BudgetDetail";
import Water from "./components/Water/";
import File from "./components/File";
import Practise from "./components/Practice";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";

const menuItems = [
    {id: 0, name: "Home", link: "/", tooltip: "Start", description: "None for now"},
    {id: 1, name: "Finance", link: "/finance", tooltip: "Third Item", description: "None for now"},
    {id: 2, name: "Water", link: "/water", tooltip: "Forth Item", description: "None for now"},
    {id: 3, name: "FileReader", link: "/fileReader", tooltip: "Fifth Item", description: "None for now"},
];

const dropdownMenuItems = [
    {id: 0, name: "Core", link: "/core", tooltip: "First Item", description: "None for now"},
    {id: 1, name: "Additions", link: "/additions", tooltip: "Second Item", description: "None for now"},
    {id: 2, name: "Practise", link: "/practise", tooltip: "Sixth Item", description: "None for now"}
]

export const MenuContext = React.createContext<any | null>(null);

const Rudi = () => {

    const [menuRootItems, setMenuRootItems] = useState(menuItems);
    const [rootName, setRootName] = useState('Rudi');
    const [windowSize, setWindowSize] = useState(window.innerWidth);

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
        window.addEventListener('resize', () => {
            setWindowSize(window.innerWidth)
        });

        if (windowSize < 768) console.log("Windows size is: " + windowSize);

        return () => {
            window.removeEventListener('resize', () => {
                setWindowSize(window.innerWidth)
            })
        }
    })

    const style =  {
        backgroundColor: 'rgba(217, 217, 219, 0.5)',
        minHeight: '100%'
    }

    return (
        <MenuContext.Provider value={{removeMenuItem, changeItemDescription, menuRootItems, dropdownMenuItems}} >
            <Router>
                <div className="wrapper" style={style}>
                    <Header rootName={rootName} onStart={onStart}/>
                    <Row >
                        <Col xl={{span: 1}} lg={{span: 1}} md={{span: 1}} className="menuCol" id="menu">
                            <Route path='/'>
                                <NavMenu/>
                            </Route>
                        </Col>
                        <Col xl={{span: 11}} lg={{span: 11}} md={{span: 11}} id="page">
                            <div className="middleCol">
                                <Switch>
                                    <Route exact path='/' />
                                    <Route path='/core'>
                                        <Core/>
                                    </Route>
                                    <Route path='/additions'>
                                        <Additions/>
                                    </Route>
                                    <Route path='/finance'>
                                        <Finance/>
                                    </Route>
                                    <Route path='/water'>
                                        <Water />
                                    </Route>
                                    <Route path='/fileReader'>
                                        <File/>
                                    </Route>
                                    <Route path='/practise'>
                                        <Practise/>
                                    </Route>
                                    <Route path='/:name' children={<BudgetDetail />} />
                                    <Route path='*'>
                                        <Error/>
                                    </Route>
                                </Switch>
                            </div>
                        </Col>
                    </Row>
                    <Footer />
                </div>
            </Router>
        </MenuContext.Provider>
    )
}

export default Rudi;