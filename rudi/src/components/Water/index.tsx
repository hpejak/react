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
            year: {value: this.nowYear.toString()},
            month: {value: this.nowMonth.toString()},
            cons_state_reported: {value: null, edit: true},
            cons_state_bill: {value: null, edit: true},
            cons_state_first_flore: {value: null, edit: true},
            cons_state_ground_flore: {value: null, edit: true},
            cons_state_yard_house: {value: null, edit: true},
            consumption_first_flore: {value: null, edit: false},
            consumption_ground_flore: {value: null, edit: false},
            consumption_yard_house: {value: null, edit: false},
            consumption_all: {value: null, edit: true},
            consumption_reported: {value: null, edit: false},
            consumption_discrepancy: {value: null, edit: false},
            consumption_bill: {value: null, edit: true},
            bill_amount: {value: null, edit: true},
            amount_first_flore: {value: null, edit: true},
            amount_ground_flore: {value: null, edit: true},
            amount_yard_house: {value: null, edit: true},
            amount_discrepancy: {value: null, edit: true},
            amount_external: {value: null, edit: true},
            amount_communicated: {value: null, edit: true},
            received_external: {value: null, edit: true},
            read_date: {value: null, edit: true},
            bill_payed_date: {value: null, edit: true}
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
        dbDataEdited[name].value = value;

        this.setState({
           dbData: dbDataEdited
        })
    }

    enableEdit = (e) => {
        const name = e.target.name;
        const dbDataState = this.state.dbData;

        if (e.target.disabled) dbDataState[name].edit = true;
        this.setState({dbData: dbDataState})
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

        const bill_payed: any = this.state.dbData.bill_payed_date.value;
        const bill_payed_string = bill_payed ? "'" + bill_payed.toString() + "'" : bill_payed;

        const received_external: any = this.state.dbData.received_external.value;
        const received_external_string = received_external ? "'" + received_external.toString() + "'" : received_external;

        const read_date: any = this.state.dbData.read_date.value;
        const read_date_string = read_date ? "'" + read_date.toString() + "'" : read_date;

        let consumption_first_flore = this.state.dbData.consumption_first_flore.value;
        let consumption_ground_flore = this.state.dbData.consumption_ground_flore.value;
        let consumption_yard_house = this.state.dbData.consumption_yard_house.value;
        const consumption_all = (consumption_first_flore ? parseFloat(consumption_first_flore) : 0) +
            (consumption_ground_flore ? parseFloat(consumption_ground_flore): 0) + (consumption_yard_house ? parseFloat(consumption_yard_house): 0);

        const bodyInput = {
            year: this.state.dbData.year.value,
            month: this.state.dbData.month.value,
            bill_payed_date: bill_payed_string,
            bill_amount: this.state.dbData.bill_amount.value,
            cons_state_reported: this.state.dbData.cons_state_reported.value,
            cons_state_bill: this.state.dbData.cons_state_bill.value,
            consumption_first_flore: consumption_first_flore,
            consumption_ground_flore: consumption_ground_flore,
            consumption_yard_house: consumption_yard_house,
            consumption_discrepancy: this.state.dbData.consumption_discrepancy.value,
            consumption_bill: this.state.dbData.consumption_bill.value,
            consumption_reported: this.state.dbData.consumption_reported.value,
            consumption_all: consumption_all,
            amount_external: this.state.dbData.amount_external.value,
            amount_communicated: this.state.dbData.amount_communicated.value,
            received_external: received_external_string,
            cons_state_first_flore: this.state.dbData.cons_state_first_flore.value,
            cons_state_ground_flore: this.state.dbData.cons_state_ground_flore.value,
            cons_state_yard_house: this.state.dbData.cons_state_yard_house.value,
            amount_first_flore: this.state.dbData.amount_first_flore.value,
            amount_ground_flore: this.state.dbData.amount_ground_flore.value,
            amount_yard_house: this.state.dbData.amount_yard_house.value,
            amount_discrepancy: this.state.dbData.amount_discrepancy.value,
            read_date: read_date_string
        };

        const requestOptions = {
            method: "POST",
            headers: {'Authorization': 'Basic ' + btoa('demoUsername:demoPassword'), 'Content-Type':'application/json'},
            body: JSON.stringify(bodyInput)
        }

        fetch('https://pejaklab.ddns.net/api/insertWater.php',requestOptions)
            .then((output)=> {
                return output.json()
            })
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

                <WaterEditor dbData={this.state.dbData} editChangeHandler={this.editChangeHandler} submitDataHandler={this.submitDataHandler} enableEdit={this.enableEdit}/>

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