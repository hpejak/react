import Menu from './Menu'
import {Button, Col, Container, Row} from "react-bootstrap";
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Rudi = () => {

    const [ rootName, setRootName ] = useState('Rudi');
    let greeting = 'Hi, I am ' + rootName;

    const onStart = () => {
        rootName === 'Start' ? setRootName('Rudi') : setRootName('Start')
    }


    return (
        <Container fluid="xl">
            <Row className="justify-content-xl-center" >
                <Col xl={{span: 3, offset: 3}}>
                    <h1>
                        {greeting}
                    </h1>
                </Col>
                <Col className="titleCol">
                    <Button className="titleBtn" onClick={onStart}>Let's Start</Button>
                </Col>
            </Row>
            <Menu />
        </Container>
    )
}

export default Rudi;