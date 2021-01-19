import {Col, Form, Row} from "react-bootstrap";

const UserInput = ({user, handleUsername}) => {

        return (
            <>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label style={{color:"gray"}}>Username</Form.Label>
                            <Form.Control name="userInput" type="text" value={user} onChange={handleUsername} />
                        </Form.Group>
                    </Col>
                </Row>
            </>
        )

}

export default UserInput;