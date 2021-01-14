import {Form, Row, Col} from "react-bootstrap";
import React, {PropsWithChildren} from "react";

const FileEntry = React.memo((props: PropsWithChildren<any>) => {
    const {entry} = props;

    console.log(props);
    console.log(entry);

    const name = entry.split(';')[0]
    const dateOfBirth = entry.split(';')[1]
    const city = entry.split(';')[2]

    return (
        <>
            <Row>
                <Col xl={{span:2}} >
                    <Form.Control type="text" id="chooseName" value={name}/>
                </Col>
                <Col xl={{span:2}}>
                    <Form.Control type="text" id="chooseDateOfBirth" value={dateOfBirth}/>
                </Col>
                <Col xl={{span:2}}>
                    <Form.Control type="text" id="chooseCity" value={city}/>
                </Col>
            </Row>
        </>
    );
});

export default FileEntry;