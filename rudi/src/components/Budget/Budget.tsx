import {ListGroup} from "react-bootstrap";
import useFetch from "../../hooks/useFetch";
import BudgetItem from "./BudgetItem";
import React from "react";
import classes from "./Budget.module.css";

const api = 'https://pejaklab.ddns.net/Financije/Getters/getBudgetView.php'

const Budget = () => {

    const {dataGrid, isError} = useFetch(api);

    if (dataGrid.length === 0) return (<p>{isError ? 'Error fetching data' : 'No data'}</p>);

    return (
        <div className={classes.BudgetCategories}>
            <ListGroup>
                {Object.entries(dataGrid).map(([key,budget]) => {
                    return (<BudgetItem key={key} {...budget} />)
                })}
            </ListGroup>
        </div>
    );
}

export default React.memo(Budget);
