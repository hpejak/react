import Menu from './Menu'
import {Button, Col, Container, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import Core from "./Core";
import Budget from "./Budget";
import Additions from "./Additions";
import Finance from "./Finance";

const Rudi = () => {

    const [ rootName, setRootName ] = useState('Rudi');
    const [ windowSize, setWindowSize ] = useState(window.innerWidth);

    let greeting = 'Hi, I am ' + rootName;

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
                <Col xl={{span: 7}} >
                    <div className="middleCol">
                        {rootName !== 'Rudi' && <Core />}
                        {rootName !== 'Rudi' && <Additions />}
                        {<Finance />}
                    </div>
                </Col>
                <Col xl={{span: 3}}>
                    <Budget />
                </Col>
            </Row>
        </Container>
    )
}

export default Rudi;