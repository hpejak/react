import Modal from "../../components/UI/Modal/Modal";
import {useEffect, useState} from "react";

const WithErrorHandler = (Componenet, fetch) => {

    const [error, setError] = useState(null);

    useEffect(
        console.log(s)
    )

    return (props) => {
        return (
            <>
                <Modal
                    show={error}
                    clicked={setError(null)}>
                    {error? error.message: null}
                </Modal>
                <Componenet {...props}/>
            </>
            );
    }

}

export default  WithErrorHandler;