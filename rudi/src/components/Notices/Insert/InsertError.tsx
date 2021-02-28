import {Col, Row} from "react-bootstrap";
import React from "react";

const InsertError = ({message}) => {

    return(
        <>
            <Row>
                <Col>
                    <p>Error while Inserting Data: {message}</p>
                </Col>
            </Row>
        </>
    )
}

export default InsertError;