import {Button, Col, Form, Row} from "react-bootstrap";
import {useState} from "react";

const Additions = () => {

    const [giftInput, setGiftInput] = useState({date: '', amount: 0});

    const [entries, setEntries] = useState<any[]>([]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setGiftInput({...giftInput,[name]:value})
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (giftInput.date && giftInput.amount > 0) {
            setEntries([...entries,giftInput])
            setGiftInput({date: '', amount: 0})
        } else {
            console.log("Please enter the fields in form");
        }
    }


    return (
        <div className="col-xl-12 col-lg-12 col-md-12">
            <Form onSubmit={handleSubmit}>

                <Form.Group as={Row} controlId="date">
                    <Form.Label column xl="3">Date : </Form.Label>
                    <Col xl="4">
                        <Form.Control type="date" name="date" value={giftInput.date} onChange={handleChange}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="amount">
                    <Form.Label column xl="3">Amount: </Form.Label>
                    <Col xl="4">
                        <Form.Control type="number" name="amount" value={giftInput.amount} onChange={handleChange}/>
                    </Col>
                </Form.Group>

                <Button type="submit">Evaluate</Button>
            </Form>

            {entries.map((entry,index) =>{
                const {date, amount} = entry;
                return (
                  <div className="rowC entryDiv" key={index}>
                      <h5 className="col-xl-6">{date}</h5>
                      <p className="col-xl-3">{amount}</p>
                  </div>
                );
            })}

        </div>
    );
}

export default Additions;