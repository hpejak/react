import {useEffect, useState} from "react";

const useFetch = (url) => {
    const [dataGrid, setDataGrid] = useState([])
    const [isError, setIsError] = useState(false)

    const getBudgetCat = () => {
        fetch(url)
            .then((resp) => resp.json())
            .then((dataGrid) => {
                setDataGrid(dataGrid)
            })
            .catch(error => setIsError(error))
    }

    useEffect(() => {
        getBudgetCat();
    }, [url]);

    return {dataGrid, isError}
}

export default useFetch;