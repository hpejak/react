import {useEffect, useState} from "react";
import {ListGroup} from "react-bootstrap";

const api = 'https://pejaklab.ddns.net/Financije/Getters/getBudgetView.php'

const Budget = () => {

    const [budgetCat, setBudgetCat] = useState([])
    const [isError, setIsError] = useState(false)

    const getBudgetCat = () => {
        fetch(api)
            .then((resp) => resp.json())
            .then((budgetCat) => {setBudgetCat(budgetCat)})
            .catch(error => setIsError(error))
    }

    useEffect(() => {
        getBudgetCat();
    },[]);


    if (budgetCat.length === 0) return (<p>{isError ? 'Error fetching data' : 'No data'}</p>);

    return (
        <>
            <ListGroup>
                {Object.entries(budgetCat).map(([key,budget]) => {
                    const {Name} = budget;
                    return <ListGroup.Item key={key}>{Name}</ListGroup.Item>
                })}
            </ListGroup>
        </>
    );
}

export default Budget;