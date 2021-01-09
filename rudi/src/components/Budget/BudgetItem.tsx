import {ListGroup} from "react-bootstrap";
import PropTypes from "prop-types"

const BudgetItem = ({Name,Amount}) => {

    return(
        <ListGroup.Item>
            <div className="budgetCategory">{Name}</div>
            <div className="budgetAmount">{Amount +' kn'}</div>
        </ListGroup.Item>
    )
}


BudgetItem.propType = {
    Name:PropTypes.string.isRequired,
    Amount:PropTypes.number.isRequired,
}

BudgetItem.defaultPrpos = {
    Name: 'Unknown',
    Amount: -1
}

export default BudgetItem;