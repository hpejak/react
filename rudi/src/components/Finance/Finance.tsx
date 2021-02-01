import React, {useReducer, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import FinanceModal from "./FinanceModal";
import financeReducer from "./FinanceReducer";
import Budget from "../Budget/Budget";



const defaultExpense: object = {
    expenseList: [],
    showModal: false,
    modalContent: '',
};

type Expense = {
    expenseDescription: string;
    expenseDate: string;
    expenseAmount: number|undefined;
    expenseCategory: string;
    budgetCategory: string;
}

const Finance = () => {

    const [expense, setExpense] = useState<Expense>({expenseDescription:'', expenseDate: '',
        expenseAmount: undefined, expenseCategory: '', budgetCategory: ''})

    const [state, dispatch] = useReducer(financeReducer, defaultExpense)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(expense.expenseDescription && expense.expenseDate && expense.expenseAmount && expense.expenseCategory && expense.budgetCategory) {
            dispatch( {type: 'ADD_EXPENSE', payload: expense} );
            setExpense({expenseDescription:'', expenseDate: '',
                expenseAmount: 0, expenseCategory: '', budgetCategory: ''})
        } else {
            dispatch( {type: 'NO_FULL_DATA'} );
        }
    }

    const handleChange = (e) => {
        const name: string = e.target.name;
        const value: any = e.target.value;

        setExpense(prevState => ({
            ...prevState, [name]: value
        }))

    }

    const closeModal = () => {
        dispatch({type: 'CLOSE_MODAL'})
    }

    return (
        <div className="col-xl-12 col-lg-12 col-md-12">
            <Row>
                <Col xl={{span: 10}} lg={{span: 10}} md={{span: 10}}>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col xl={10}>
                                <h5 className='financeLabel'>Expense</h5>
                            </Col>
                            <Col xl={2}>
                                <Button type='submit' size='sm' variant='outline-info'>Submit</Button>
                            </Col>
                        </Row>


                        <Row>
                            <Col xl={7}>
                                <Form.Group controlId='description'>
                                    <Form.Label className='financeLabel'>Description</Form.Label>
                                    <Form.Control name='expenseDescription' type='text' value={expense.expenseDescription} onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col xl={5}>
                                <Form.Group controlId='date'>
                                    <Form.Label className='financeLabel'>Date</Form.Label>
                                    <Form.Control name='expenseDate' type='date' value={expense.expenseDate} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col xl={4}>
                                <Form.Group controlId='amount'>
                                    <Form.Label className='financeLabel'>Amount</Form.Label>
                                    <Form.Control name='expenseAmount' type='number' value={expense.expenseAmount} onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col xl={4}>
                                <Form.Group controlId='category'>
                                    <Form.Label className='financeLabel'>Category</Form.Label>
                                    <Form.Control name='expenseCategory' type='text' value={expense.expenseCategory} onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col xl={4}>
                                <Form.Group controlId='budgetCategory'>
                                    <Form.Label className='financeLabel'>Budget Category</Form.Label>
                                    <Form.Control name='budgetCategory' type='text' value={expense.budgetCategory} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>

                    </Form>
                    {state.showModal && <FinanceModal closeModal={closeModal} modalContent={state.modalContent} />}
                </Col>
                <Col xl={{span: 2}} lg={{span: 2}} md={{span: 2}}>
                    <Budget/>
                </Col>
            </Row>
        </div>

    )
}

export default Finance;