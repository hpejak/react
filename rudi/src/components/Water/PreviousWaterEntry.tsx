import {Col, Row} from "react-bootstrap";
import PropTypes from "prop-types";

const PreviousWaterEntry = ({oldData}) => {

    const firstColStyle = {
        fontWeight: 'bold' as 'bold',
    }

    return(
        <>
            <Row style={firstColStyle} className="col-xl-12 col-lg-12 col-md-12">
                <Col>Name</Col>
                <Col>Sum</Col>
                <Col>First Flore</Col>
                <Col>Ground Flore</Col>
                <Col>Yard House</Col>
            </Row>

            <Row className="col-xl-12 col-lg-12 col-md-12">
                <Col>Consumption State</Col>
                <Col>{oldData.cons_state_reported || null}</Col>
                <Col>{oldData.cons_state_first_flore || null}</Col>
                <Col>{oldData.cons_state_ground_flore || null}</Col>
                <Col>{oldData.cons_state_yard_house || null}</Col>
            </Row>

            <Row className="col-xl-12 col-lg-12 col-md-12">
                <Col>Consumption</Col>
                <Col>{oldData.consumption_all || null}</Col>
                <Col>{oldData.consumption_first_flore || null}</Col>
                <Col>{oldData.consumption_ground_flore || null}</Col>
                <Col>{oldData.consumption_yard_house || null}</Col>
            </Row>
        </>
    );
}

PreviousWaterEntry.propTypes = {
    oldData: PropTypes.any.isRequired
};

PreviousWaterEntry.defaultProps = {
    oldData: {
        reported: null,
        cons_state_first_flore: null
    },
}

export default PreviousWaterEntry;
