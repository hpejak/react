import {Button, Col, Row} from "react-bootstrap";
import React from "react";

const Header = ({rootName, onStart}) => {

    let greeting = 'Hi, I am ' + rootName;

    const style ={
            color: 'white',
            backgroundColor: '#878f99',
            borderRadius: '15px',
            fontFamily: 'Georgia'
        }

    return (
        <div>
            <Row className="titleRow" style={style}>
                <Col xl={{span: 6, offset: 4}} lg={{span: 6, offset: 4}} md={{span: 6, offset: 4}}>
                    <h1>{greeting}</h1>
                </Col>
                <Col className="titleCol">
                    <Button className="titleBtn" onClick={onStart}>Let's Start</Button>
                </Col>
            </Row>
        </div>
    );

}

export default Header;