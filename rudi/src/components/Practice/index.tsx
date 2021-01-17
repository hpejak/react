import UserInput from "./UserInput";
import UserOutput from "./UserOutput";
import {Col, Row} from "react-bootstrap";

const Practise = () => {
    return (
        <>
            <Row>
                <Col>
                    <UserInput/>
                </Col>
                <Col>
                    <UserOutput/>
                </Col>
            </Row>
        </>)
}

export default Practise