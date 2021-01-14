import {Form} from "react-bootstrap";

const ConsumptionInput = ({entry, consumptionSum, editFieldFunction}) => {

return (
    <Form.Group>
        <Form.Label>{entry.description} m<sup>3</sup></Form.Label>
        <Form.Control name={entry.name} type="number" value={consumptionSum} onChange={editFieldFunction}/>
    </Form.Group>
    )

}

export default ConsumptionInput