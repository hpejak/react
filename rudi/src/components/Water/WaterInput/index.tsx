import {Button, Col, Row} from "react-bootstrap";
import ConsumptionInput from "../ConsumptionInput";

const participant = [
    {id:1, name: 'consumptionSum', description: 'Consumption sum'},
    {id:2, name: 'consumptionSecondFlore', description: 'Pejak'},
    {id:3, name: 'consumptionFirsFlore', description: 'Teodorović'},
    {id:4, name: 'consumptionLittleHouse', description: 'Little House'}
]

const WaterInput = (props) => {

    const {consumptionHandler, consumptionChangeHandler, consumptionSum, consumptionSecondFlore, consumptionFirsFlore, consumptionLittleHouse, show} = props;

    const btnStyle = {
        marginTop: '30px',
    };

    return (
        <div hidden={!show}>
            <Row>
                <Col>
                    <ConsumptionInput entry={participant[0]} consumptionSum={consumptionSum} editFieldFunction={consumptionChangeHandler}/>
                </Col>
                <Col>
                    <ConsumptionInput entry={participant[1]} consumptionSum={consumptionSecondFlore} editFieldFunction={consumptionChangeHandler}/>
                </Col>
                <Col>
                    <ConsumptionInput entry={participant[2]} consumptionSum={consumptionFirsFlore} editFieldFunction={consumptionChangeHandler}/>
                </Col>
                <Col>
                    <ConsumptionInput entry={participant[3]} consumptionSum={consumptionLittleHouse} editFieldFunction={consumptionChangeHandler}/>
                </Col>
                <Col>
                    <Button style={btnStyle} onClick={consumptionHandler}>Calculate</Button>
                </Col>
            </Row>
        </div>
    );

};

export default WaterInput;