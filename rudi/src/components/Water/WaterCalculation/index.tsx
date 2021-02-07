import {Row} from "react-bootstrap";

const WaterCalculation = ({monthPrice, secondFlorePrice, firstFlorePrice, show}) => {

    return (
        <div hidden={!show}>
            <Row>
                <h6>Full Price for water consumption is {monthPrice} kn</h6>
            </Row>
            <Row>
                <h6>Pejak Price for water consumption is {secondFlorePrice} kn</h6>
            </Row>
            <Row>
                <h6>Teodorović Price for water consumption is {firstFlorePrice} kn</h6>
            </Row>
        </div>
    );

}

export default WaterCalculation;