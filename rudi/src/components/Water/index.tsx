import {Component} from "react";
import {Button, Form, Row} from "react-bootstrap";

class Water extends Component{

    state = {
        priceOfCubic: 11.66,
        lumpSum: 31.33,
        consumptionFirsFlore: 0,
        consumptionSecondFlore: 0,
        consumptionLittleHouse: 0,
        consumptionSum: 0,
        firstFlorePrice: 0,
        secondFlorePrice: 0,
        monthPrice: 0
    }

    consumptionHandler = () => {

        const priceSum = this.state.priceOfCubic * this.state.consumptionSum + this.state.lumpSum
        const secondFlorePrice = this.state.priceOfCubic * this.state.consumptionSecondFlore + (this.state.lumpSum / 2)

        const firstTenetSum: number = Number(this.state.consumptionFirsFlore) + Number(this.state.consumptionLittleHouse)
        const firstTenetPrice = (this.state.priceOfCubic * firstTenetSum) + (this.state.lumpSum / 2)


        this.setState({
            monthPrice: priceSum.toFixed(2),
            secondFlorePrice: secondFlorePrice.toFixed(2),
            firstFlorePrice: firstTenetPrice.toFixed(2),
            }
        )
    }

    consumptionChangeHandler = (e) => {

        this.setState({
            consumptionSum: e.target.value
        })
    }

    consumptionFirstFloreChangeHandler = (e) => {

        this.setState({
            consumptionFirsFlore: e.target.value
        })
    }

    consumptionSecondFloreChangeHandler = (e) => {

        this.setState({
            consumptionSecondFlore: e.target.value
        })
    }

    consumptionLittleHouseChangeHandler = (e) => {

        this.setState({
            consumptionLittleHouse: e.target.value
        })
    }

    render() {
        return (
            <>

                <Row>
                    <Form.Group>
                        <Form.Label>Consumption sum m<sup>3</sup></Form.Label>
                        <Form.Control type="number" value={this.state.consumptionSum} onChange={this.consumptionChangeHandler}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Pejak m<sup>3</sup></Form.Label>
                        <Form.Control type="number" value={this.state.consumptionSecondFlore} onChange={this.consumptionSecondFloreChangeHandler}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Teodorović m<sup>3</sup></Form.Label>
                        <Form.Control type="number" value={this.state.consumptionFirsFlore} onChange={this.consumptionFirstFloreChangeHandler}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Little House m<sup>3</sup></Form.Label>
                        <Form.Control type="number" value={this.state.consumptionLittleHouse} onChange={this.consumptionLittleHouseChangeHandler}/>
                    </Form.Group>

                </Row>

                <Row>
                    <Button onClick={this.consumptionHandler}>Calculate</Button>
                </Row>


                <Row>
                    <h6>Full Price for water consumption is {this.state.monthPrice} kn</h6>
                </Row>
                <Row>
                    <h6>Pejak Price for water consumption is {this.state.secondFlorePrice} kn</h6>
                </Row>
                <Row>
                    <h6>Teodorović Price for water consumption is {this.state.firstFlorePrice} kn</h6>
                </Row>


            </>
        )
    }

}

export default Water;