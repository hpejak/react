import {Button, Col, Form, Row} from "react-bootstrap";
import {useState} from "react";

const Additions = () => {

    const [monthName, setMonthName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Hello World');
    }

    return (<div>
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} controlId="monthName">
                <Form.Label column xl="3">Insert Month : </Form.Label>
                <Col xl="3">
                    <Form.Control type="text" value={monthName} onChange={(e) => setMonthName(e.target.value)} />
                </Col>
            </Form.Group>
            <Button type="submit">Evaluate</Button>
        </Form>

    </div>)
}

export default Additions;