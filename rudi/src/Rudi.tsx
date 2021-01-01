import Menu from './Menu'
import {Button, Col, Container, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import Core from "./Core";

const Rudi = () => {

    const [ rootName, setRootName ] = useState('Rudi');
    const [ windowSize, setWindowSize ] = useState(window.innerWidth);

    let greeting = 'Hi, I am ' + rootName;

    const onStart = () => {
        rootName === 'Start' ? setRootName('Rudi') : setRootName('Start')
    }

    useEffect(() => {
        if (rootName != '') document.title = rootName;
    }, [rootName]);

    useEffect(() => {
        window.addEventListener('resize', () => {setWindowSize(window.innerWidth)});
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
                <Col xl={{span: 3}}>
                    <Menu />
                </Col>
                <Col xl={{span: 9}}>
                    <Core />
                </Col>
            </Row>


        </Container>
    )
}

export default Rudi;