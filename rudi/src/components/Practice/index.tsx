import UserInput from "./UserInput";
import UserOutput from "./UserOutput";
import {Col, Row} from "react-bootstrap";
import React, {useState} from "react";

const Practise = () => {

    const [username, setUsername] = useState<string>('testUser');

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    return (
        <>
            <Row>
                <Col>
                    <UserInput user={username} handleUsername={handleUsername}/>
                </Col>
                <Col>
                    <UserOutput user={username}/>
                    <UserOutput user={username}/>
                </Col>
            </Row>
        </>)
}

export default Practise