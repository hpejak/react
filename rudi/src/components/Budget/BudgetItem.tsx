import {ListGroup} from "react-bootstrap";
import PropTypes from "prop-types"
import {Link} from "react-router-dom";
import classes from "./BudgetItem.module.css"

const BudgetItem = ({Name,Amount}) => {


    return(
        <ListGroup.Item>
            <div className={classes.BudgetCategory}>
                <Link to={`/${Name}`}>{Name}</Link>
            </div>
            <div className={classes.BudgetAmount}>{Amount +' kn'}</div>
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