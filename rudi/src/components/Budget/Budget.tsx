import {ListGroup} from "react-bootstrap";
import useFetch from "../../hooks/useFetch";
import BudgetItem from "./BudgetItem";
import React from "react";

const api = 'https://pejaklab.ddns.net/Financije/Getters/getBudgetView.php'

const Budget = () => {

    const {dataGrid, isError} = useFetch(api);

    if (dataGrid.length === 0) return (<p>{isError ? 'Error fetching data' : 'No data'}</p>);

    return (
        <>
            <ListGroup>
                {Object.entries(dataGrid).map(([key,budget]) => {
                    return (<BudgetItem key={key} {...budget}/>)
                })}
            </ListGroup>
        </>
    );
}

export default React.memo(Budget);
