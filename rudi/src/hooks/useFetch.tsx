import {useEffect, useState} from "react";

const useFetch = (url) => {
    const [dataGrid, setDataGrid] = useState([])
    const [isError, setIsError] = useState(false)



    useEffect(() => {
        const getData = () => {
            fetch(url)
                .then((resp) => resp.json())
                .then((dataGrid) => {
                    setDataGrid(dataGrid)
                })
                .catch(error => setIsError(error))
        }

        getData();

    }, [url]);

    return {dataGrid, isError}
}

export default useFetch;