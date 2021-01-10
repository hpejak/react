import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import useFetch from "../../hooks/useFetch";

const api = 'https://pejaklab.ddns.net/Financije/Getters/getBudgetView.php'

const BudgetDetail = () => {
    const {name} = useParams();
    const [amount, setAmount] = useState<number>(0);
    const {dataGrid} = useFetch(api);

    //TODO render dataGrid is empty

    useEffect(() => {
        const budgetCat: any = Object.values(dataGrid).find((budget:any) => budget.Name === name);

        budgetCat && setAmount(budgetCat.Amount)
    }, [name]);

    return (
        <>
            <h3>This is Budget Placeholder</h3>
            <p>Budget is {name}</p>
            <p>Budget amount is {amount}</p>
        </>
    )

}
export default BudgetDetail;