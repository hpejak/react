import {Button, Col, Row} from "react-bootstrap";
import React from "react";

const Header = ({rootName, onStart}) => {

    let greeting = 'Hi, I am ' + rootName;

    return (
        <div>
            <Row className="titleRow">
                <Col xl={{span: 10}} lg={{span: 10}} md={{span: 10}}>
                    {greeting}
                </Col>
                <Col className="titleCol">
                    <Button className="titleBtn" onClick={onStart}>Let's Start</Button>
                </Col>
            </Row>
        </div>
    );

}

export default Header;