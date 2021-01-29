import {Component} from "react";
import {Button, Col, Row} from "react-bootstrap";
import ConsumptionInput from "./ConsumptionInput";

const participant = [
    {id:1, name: 'consumptionSum', description: 'Consumption sum'},
    {id:2, name: 'consumptionSecondFlore', description: 'Pejak'},
    {id:3, name: 'consumptionFirsFlore', description: 'Teodorović'},
    {id:4, name: 'consumptionLittleHouse', description: 'Little House'}
    ]

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
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        })
    }


    render() {
        const style = {
            cursor: 'pointer'
        }

        const btnStyle = {
            marginTop: '30px',
        }

        return (
            <div className="col-xl-12 col-lg-12 col-md-12">
                <Row>
                    <Col>
                        <ConsumptionInput entry={participant[0]} consumptionSum={this.state.consumptionSum} editFieldFunction={this.consumptionChangeHandler}/>
                    </Col>
                    <Col>
                        <ConsumptionInput entry={participant[1]} consumptionSum={this.state.consumptionSecondFlore} editFieldFunction={this.consumptionChangeHandler}/>
                    </Col>
                    <Col>
                        <ConsumptionInput entry={participant[2]} consumptionSum={this.state.consumptionFirsFlore} editFieldFunction={this.consumptionChangeHandler}/>
                    </Col>
                    <Col>
                        <ConsumptionInput entry={participant[3]} consumptionSum={this.state.consumptionLittleHouse} editFieldFunction={this.consumptionChangeHandler}/>
                    </Col>
                    <Col>
                        <Button style={btnStyle} onClick={this.consumptionHandler}>Calculate</Button>
                    </Col>
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

            </div>
        )
    }

}

export default Water;