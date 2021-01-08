import {useEffect} from "react";

const FinanceModal = ({modalContent, closeModal}) => {

    useEffect(() => {
        setTimeout(() => {
            closeModal()
        }, 5000)
    })

    return (
        <>
            <p className="financeModal">{modalContent}</p>
        </>
    );

}


export default FinanceModal;