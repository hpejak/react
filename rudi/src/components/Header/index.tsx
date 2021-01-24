import {Button, Col, Row} from "react-bootstrap";
import React from "react";
import * as CSS from 'csstype';

const Header = ({rootName, onStart}) => {

    let greeting = 'Hi, I am ' + rootName;

    const style: CSS.Properties ={
            // margin: '1px',
            color: 'navy',
            backgroundColor: 'rgba(169, 177, 199,0.5)',
            height: '80px',
            borderRadius: '15px',
            border: '3px solid #919bba',
            boxShadow: '1px 1px 5px 5px #919bba',
            alignContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            fontWeight: 'bolder',
            fontFamily: 'Georgia',
            fontSize: '30px'
        }

    return (
        <div>
            <Row className="titleRow" style={style}>
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