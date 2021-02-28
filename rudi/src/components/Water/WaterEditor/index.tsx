import {Form, Row, Col, Button} from "react-bootstrap";
import React from "react";
import InsertError from "../../Notices/Insert/InsertError";


//TODO Discrepancy consumption disabled. Double click enables it
//TODO ALl Consumption Disabled. Calculated from state

const WaterEditor = ({dbData, editChangeHandler,submitDataHandler, enableEdit, insertError}) => {

    const errorMessage = insertError ? <InsertError message={insertError}/> : null




    return (
        <>
            {errorMessage}
            <Row>
                <Col>
                    <Row>
                        <Form.Group >
                            <Form.Label column="sm">Year</Form.Label>
                            <Form.Control name="year" type="number" min="1900" max="2100" step="1"
                                          value={dbData.year.value || ''}
                                          onChange={editChangeHandler}/>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label column="sm">Month</Form.Label>
                            <Form.Control name="month" type="number" min="1" max="12" step="1"
                                          value={dbData.month.value || ''}
                                          onChange={editChangeHandler}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label column="sm">Bill Payed</Form.Label>
                            <Form.Control name="bill_payed_date"
                                          type="date"
                                          value={dbData.bill_payed_date.value || ''}
                                          disabled={!dbData.bill_payed_date.edit}
                                          onChange={editChangeHandler}/>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label column="sm">Bill Amount</Form.Label>
                            <Form.Control name="bill_amount"
                                          type="number"
                                          value={dbData.bill_amount.value || ''}
                                          disabled={!dbData.bill_amount.edit}
                                          onChange={editChangeHandler}/>
                        </Form.Group>
                    </Row>
                </Col>

                <Col>
                    <Row>
                        <Form.Group onDoubleClick={enableEdit}>
                            <Form.Label column="sm">Reported m<sup>3</sup></Form.Label>
                            <Form.Control name="consumption_reported"
                                          type="number"
                                          value={dbData.consumption_reported.value || ''}
                                          disabled={!dbData.consumption_reported.edit}
                                          onChange={editChangeHandler}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label column="sm">Read Date</Form.Label>
                            <Form.Control name="read_date"
                                          type="date"
                                          value={dbData.read_date.value || ''}
                                          disabled={!dbData.read_date.edit}
                                          onChange={editChangeHandler}/>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label column="sm">Bill Consumption m<sup>3</sup></Form.Label>
                            <Form.Control name="consumption_bill"
                                          type="number"
                                          value={dbData.consumption_bill.value || ''}
                                          disabled={!dbData.consumption_bill.edit}
                                          onChange={editChangeHandler}/>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label column="sm">Bill State</Form.Label>
                            <Form.Control name="cons_state_bill"
                                          type="number"
                                          value={dbData.cons_state_bill.value || ''}
                                          disabled={!dbData.cons_state_bill.edit}
                                          onChange={editChangeHandler}/>
                        </Form.Group>

                    </Row>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Row>
                        <Form.Group onDoubleClick={enableEdit}>
                            <Form.Label column="sm">First Flore Consumption m<sup>3</sup></Form.Label>
                            <Form.Control name="consumption_first_flore"
                                          type="number"
                                          value={dbData.consumption_first_flore.value || ''}
                                          disabled={!dbData.consumption_first_flore.edit}
                                          onChange={editChangeHandler}/>
                        </Form.Group>

                        <Form.Group onDoubleClick={enableEdit}>
                            <Form.Label column="sm" >Ground Flore Consumption m<sup>3</sup></Form.Label>
                            <Form.Control name="consumption_ground_flore"
                                          type="number"
                                          value={dbData.consumption_ground_flore.value || ''}
                                          disabled={!dbData.consumption_ground_flore.edit}
                                          onChange={editChangeHandler}/>
                        </Form.Group>

                        <Form.Group onDoubleClick={enableEdit}>
                            <Form.Label column="sm">Yard Flore Consumption m<sup>3</sup></Form.Label>
                            <Form.Control name="consumption_yard_house"
                                          type="number"
                                          value={dbData.consumption_yard_house.value || ''}
                                          disabled={!dbData.consumption_yard_house.edit}
                                          onChange={editChangeHandler}/>
                        </Form.Group>

                        <Form.Group onDoubleClick={enableEdit}>
                            <Form.Label column="sm">Discrepancy Consumption m<sup>3</sup></Form.Label>
                            <Form.Control name="consumption_discrepancy"
                                          type="number"
                                          value={dbData.consumption_discrepancy.value || ''}
                                          disabled={!dbData.consumption_discrepancy.edit}
                                          onChange={editChangeHandler}/>
                        </Form.Group>

                    </Row>
                </Col>

                <Col>
                    <Row>
                        <Form.Group >
                            <Form.Label column="sm">Amount External</Form.Label>
                            <Form.Control name="amount_external"
                                          type="number"
                                          value={dbData.amount_external.value || ''}
                                          disabled={!dbData.amount_external.edit}
                                          onChange={editChangeHandler}/>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label column="sm">Amount Communicated</Form.Label>
                            <Form.Control name="amount_communicated"
                                          type="number"
                                          value={dbData.amount_communicated.value || ''}
                                          disabled={!dbData.amount_communicated.edit}
                                          onChange={editChangeHandler}/>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label column="sm">External Received</Form.Label>
                            <Form.Control name="received_external"
                                          type="date"
                                          value={dbData.received_external.value || ''}
                                          disabled={!dbData.received_external.edit}
                                          onChange={editChangeHandler}/>
                        </Form.Group>
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Row>
                        <Form.Group >
                            <Form.Label column="sm">First Flore m<sup>3</sup></Form.Label>
                            <Form.Control name="cons_state_first_flore"
                                          type="number"
                                          value={dbData.cons_state_first_flore.value || ''}
                                          disabled={!dbData.cons_state_first_flore.edit}
                                          onChange={editChangeHandler}/>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label column="sm">Ground Flore m<sup>3</sup></Form.Label>
                            <Form.Control name="cons_state_ground_flore"
                                          type="number"
                                          value={dbData.cons_state_ground_flore.value || ''}
                                          disabled={!dbData.cons_state_ground_flore.edit}
                                          onChange={editChangeHandler}/>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label column="sm">Yard Flore m<sup>3</sup></Form.Label>
                            <Form.Control name="cons_state_yard_house"
                                          type="number"
                                          value={dbData.cons_state_yard_house.value || ''}
                                          disabled={!dbData.cons_state_yard_house.edit}
                                          onChange={editChangeHandler}/>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label column="sm">Reported State m<sup>3</sup></Form.Label>
                            <Form.Control name="cons_state_reported"
                                          type="number"
                                          value={dbData.cons_state_reported.value || ''}
                                          disabled={!dbData.cons_state_reported.edit}
                                          onChange={editChangeHandler}/>
                        </Form.Group>

                    </Row>
                </Col>

                <Col>
                    <Row>
                        <Form.Group >
                            <Form.Label column="sm">First Flore Amount</Form.Label>
                            <Form.Control name="amount_first_flore"
                                          type="number"
                                          value={dbData.amount_first_flore.value || ''}
                                          disabled={!dbData.amount_first_flore.edit}
                                          onChange={editChangeHandler}/>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label column="sm">Ground Flore Amount</Form.Label>
                            <Form.Control name="amount_ground_flore"
                                          type="number"
                                          value={dbData.amount_ground_flore.value || ''}
                                          disabled={!dbData.amount_ground_flore.edit}
                                          onChange={editChangeHandler}/>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label column="sm">Yard Flore Amount</Form.Label>
                            <Form.Control name="amount_yard_house"
                                          type="number"
                                          value={dbData.amount_yard_house.value || ''}
                                          disabled={!dbData.amount_yard_house.edit}
                                          onChange={editChangeHandler}/>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label column="sm">Discrepancy Amount</Form.Label>
                            <Form.Control name="amount_discrepancy"
                                          type="number"
                                          value={dbData.amount_discrepancy.value || ''}
                                          disabled={!dbData.amount_discrepancy.edit}
                                          onChange={editChangeHandler}/>
                        </Form.Group>

                    </Row>
                </Col>
            </Row>

            <Row>
                <Col xl={{span: 1, offset:4}} lg={{span: 1, offset:4}} md={{span: 1, offset:4 }}>
                    <Button variant="success" size="lg" onClick={submitDataHandler}>Submit</Button>
                </Col>
                <Col>
                    <Button variant="success" size="lg">Update</Button>
                </Col>
            </Row>
        </>
    );

}

export default WaterEditor;