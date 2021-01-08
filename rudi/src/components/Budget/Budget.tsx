import {ListGroup} from "react-bootstrap";
import useFetch from "../../hooks/useFetch";

const api = 'https://pejaklab.ddns.net/Financije/Getters/getBudgetView.php'

const Budget = () => {

    const {dataGrid, isError} = useFetch(api);

    if (dataGrid.length === 0) return (<p>{isError ? 'Error fetching data' : 'No data'}</p>);

    return (
        <>
            <ListGroup>
                {Object.entries(dataGrid).map(([key,budget]) => {
                    const {Name} = budget;
                    return <ListGroup.Item key={key}>{Name}</ListGroup.Item>
                })}
            </ListGroup>
        </>
    );
}

export default Budget;