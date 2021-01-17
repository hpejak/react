import {Form, Row, Col} from "react-bootstrap";
import React, {PropsWithChildren} from "react";

const FileEntry = React.memo((props: PropsWithChildren<any>) => {
    const {entry} = props;

    const name = entry.split(';')[0]
    const dateOfBirth = entry.split(';')[1]
    const city = entry.split(';')[2]

    const handleChange = (e) => {
        console.log('NOTHING TO SAY');
    }

    return (
        <>
            <Row>
                <Col xl={{span:2}} >
                    <Form.Control type="text" id="chooseName" value={name} onChange={handleChange}/>
                </Col>
                <Col xl={{span:2}}>
                    <Form.Control type="text" id="chooseDateOfBirth" value={dateOfBirth} onChange={handleChange}/>
                </Col>
                <Col xl={{span:2}}>
                    <Form.Control type="text" id="chooseCity" value={city} onChange={handleChange}/>
                </Col>
            </Row>
        </>
    );
});

export default FileEntry;