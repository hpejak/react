import Auxiliary from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'
import {Component} from "react";

class OrderSummary extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("OrderSummary Did Update")
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(key => {
            return <li key={key}>
                <span style={{textTransform: 'capitalize'}}>{key}</span>: {this.props.ingredients[key]}
            </li>
        })

        return (
            <Auxiliary>
                <h3>Order</h3>
                <p>Ingredients are:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout!</p>
                <Button btnTypes="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnTypes="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Auxiliary>
        );
    }
}

export default OrderSummary;