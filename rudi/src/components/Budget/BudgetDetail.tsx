import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import useFetch from "../../hooks/useFetch";

const api = 'https://pejaklab.ddns.net/Financije/Getters/getBudgetView.php'


const BudgetDetail = React.memo(() => {
    const {name} = useParams<{name: string}>();
    const [amount, setAmount] = useState<number| undefined>(undefined);
    const {dataGrid} = useFetch(api);

    useEffect(() => {
        const budgetCat: any = Object.values(dataGrid).find((budget:any) => budget.Name === name);
        (budgetCat && amount !== budgetCat.Amount) && setAmount(budgetCat.Amount)

    },[dataGrid, name, amount]);


    return (
        <>
            <h3>This is Budget Placeholder</h3>
            <p>Budget is {name}</p>
            <p>Budget amount is {amount}</p>
        </>
    )

})

export default BudgetDetail;
