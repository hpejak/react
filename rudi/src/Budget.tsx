import {useEffect, useState} from "react";

const api = 'https://pejaklab.ddns.net/Financije/Getters/getBudgetView.php'

const Budget = () => {

    const [budgetCat, setBudgetCat] = useState([])

    const getBudgetCat = async() => {
        const response = await fetch(api);
        const budgetCategory = await response.json();
        setBudgetCat(budgetCategory);
    }

    useEffect(() => {
        // noinspection JSIgnoredPromiseFromCall
        getBudgetCat();
    },[]);

    if (budgetCat.length === 0) return (<p>No data</p>)

    return (
        <>
            <ul>
                {Object.entries(budgetCat).map(([key,budget]) => {
                    const {Name} = budget;
                    return <li key={key}>{Name}</li>
                })}
            </ul>
        </>
    );
}

export default Budget;