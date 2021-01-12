import {useCallback, useEffect, useState} from "react";

const useFetch = (url) => {
    const [dataGrid, setDataGrid] = useState([])
    const [isError, setIsError] = useState(false)

    const getData = useCallback(() => {
        fetch(url)
            .then((resp) => resp.json())
            .then((dataGrid) => {
                setDataGrid(dataGrid)
            })
            .catch(error => setIsError(error))
    },[url])

    useEffect(() => {

        getData();

    }, [url,getData]);

    return {dataGrid, isError}
}

export default useFetch;