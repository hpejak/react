import {Button, Col, Form, Row} from "react-bootstrap";
import {useState} from "react";

const Additions = () => {

    const [date, setDate] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);
    const [entries, setEntries] = useState<any[]>([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (date && amount > 0) {
            const entry: object = {date, amountValue: amount};
            setEntries((entries) => {
                return [...entries, entry];
            });

            setDate('');
            setAmount(0);
        } else {
            console.log("Please enter the fields in form");
        }
    }


    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} controlId="date">
                    <Form.Label column xl="3">Date : </Form.Label>
                    <Col xl="4">
                        <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="amount">
                    <Form.Label column xl="3">Amount: </Form.Label>
                    <Col xl="4">
                        <Form.Control type="number" value={amount} onChange={(e) => {
                            setAmount(e.target.value as any);
                        }}/>
                    </Col>
                </Form.Group>
                <Button type="submit">Evaluate</Button>
            </Form>

            {entries.map((entry,index) =>{
                const {date, amountValue} = entry;
                return (
                  <div className="rowC entryDiv" key={index}>
                      <h5 className="col-xl-6">{date}</h5>
                      <p className="col-xl-3">{amountValue}</p>
                  </div>
                );
            })}

        </div>
    );
}

export default Additions;