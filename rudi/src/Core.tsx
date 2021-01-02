import {useState} from "react";
import {Button, Col} from "react-bootstrap";

const Core = () => {

    const [numberValue, setNumberValue] = useState(0);

    const increaseNumber = () => {
        setTimeout(() => {
            setNumberValue((oldNumber: number)=>{
                return oldNumber + 1;
            })
        },2000)
    }

    return (
        <div className="core col-xl-12" >
            <h4>Play with useState and numbers</h4>

            <h1>{numberValue}</h1>

            <Button variant="outline-danger" className="coreBtn" onClick={() => setNumberValue(numberValue - 1)}> Decrease </Button>
            <Button variant="outline-info" className="coreBtn" onClick={() => setNumberValue(0)}> Reset </Button>
            <Button variant="outline-success" className="coreBtn" onClick={increaseNumber}> Increase with Delay </Button>

        </div>
    )
}

export default Core;