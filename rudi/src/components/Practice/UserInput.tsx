import {Col, Form, Row} from "react-bootstrap";
import {Component} from "react";

class UserInput extends Component{

    state={
        userInput:''
    }

    render(){

        return (
            <>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>User Input</Form.Label>
                            <Form.Control name="userInput" type="text"/>
                        </Form.Group>
                    </Col>
                </Row>
            </>
        )
    }

}

export default UserInput;