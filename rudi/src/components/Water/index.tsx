import {Component} from "react";
import {Row} from "react-bootstrap";
import PreviousWaterEntry from "./PreviousWaterEntry";
import WaterEditor from "./WaterEditor";
import WaterInput from "./WaterInput";
import WaterCalculation from "./WaterCalculation";


class Water extends Component{

    nowDate = new Date()
    nowMonth = this.nowDate.getMonth() + 1;
    nowYear = this.nowDate.getFullYear();

    state = {
        priceOfCubic: 11.66,
        lumpSum: 31.33,
        consumptionFirsFlore: 0,
        consumptionSecondFlore: 0,
        consumptionLittleHouse: 0,
        consumptionSum: 0,
        firstFlorePrice: 0,
        secondFlorePrice: 0,
        monthPrice: 0,
        dbData:{
            year: this.nowYear.toString(),
            month: this.nowMonth.toString(),
            cons_state_reported: null,
            cons_state_bill: null,
            cons_state_first_flore: null,
            cons_state_ground_flore: null,
            cons_state_yard_house: null,
            consumption_first_flore: null,
            consumption_ground_flore: null,
            consumption_yard_house: null,
            consumption_all: null,
            consumption_discrepancy: null,
            consumption_bill: null,
            bill_amount: null,
            amount_first_flore: null,
            amount_ground_flore: null,
            amount_yard_house: null,
            amount_discrepancy: null,
            amount_external: null,
            amount_communicated: null,
            received_external: null,
            read_date: null,
            bill_payed_date: null,

        },
        oldData : {
            data: [],
        },
        showInput: false
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

    editChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        const dbDataEdited = this.state.dbData;
        dbDataEdited[name] = value;

        this.setState({
           dbData: dbDataEdited
        })
    }

    componentDidMount() {
        this.getOldData();
    }

    getOldData = () => {
        let headers = new Headers();

        headers.set('Authorization', 'Basic ' + btoa('demoUsername:demoPassword'))
        fetch('https://pejaklab.ddns.net/api/getWater.php?task=getLastInput',{method: 'GET', headers: headers})
            .then((response) => response.json())
            .then((jsonRes) => this.setState({oldData:jsonRes}))
            .catch(error => console.log(error));
    }

    submitDataHandler = () => {

        const bill_payed: any = this.state.dbData.bill_payed_date;
        const bill_payed_string = bill_payed ? "'" + bill_payed.toString() + "'" : bill_payed

        const bodyInput = {
            year: this.state.dbData.year,
            month: this.state.dbData.month,
            bill_payed_date: bill_payed_string,
            bill_amount: this.state.dbData.bill_amount,
            cons_state_reported: this.state.dbData.cons_state_reported,
            cons_state_bill: this.state.dbData.cons_state_bill,
            consumption_first_flore: this.state.dbData.consumption_first_flore
        };


        const requestOptions = {
            method: "POST",
            headers: {'Authorization': 'Basic ' + btoa('demoUsername:demoPassword'), 'Content-Type':'application/json'},
            body: JSON.stringify(bodyInput)
        }

        fetch('https://pejaklab.ddns.net/api/insertWater.php',requestOptions)
            .then((output)=> output.json())
            .then((response) => console.log(response))
            .catch(error => console.log(error))
    }

    render() {
        const previousStyle = {
            marginBottom: '50px',
        }

        return (
            <div className="col-xl-12 col-lg-12 col-md-12">
                <Row style={previousStyle}>
                    <PreviousWaterEntry  oldData={this.state.oldData.data[0] || this.state.oldData}/>
                </Row>

                <WaterInput show={this.state.showInput}
                            consumptionHandler={this.consumptionHandler}
                            consumptionChangeHandler={this.consumptionChangeHandler}
                            consumptionSum={this.state.consumptionSum}
                            consumptionSecondFlore={this.state.consumptionSecondFlore}
                            consumptionFirsFlore={this.state.consumptionFirsFlore}
                            consumptionLittleHouse={this.state.consumptionLittleHouse}
                />

                <WaterEditor dbData={this.state.dbData} editChangeHandler={this.editChangeHandler} submitDataHandler={this.submitDataHandler}/>

                <WaterCalculation show={this.state.showInput}
                    monthPrice={this.state.monthPrice}
                    secondFlorePrice={this.state.secondFlorePrice}
                    firstFlorePrice={this.state.firstFlorePrice}
                />

            </div>
        )
    }

}

export default Water;