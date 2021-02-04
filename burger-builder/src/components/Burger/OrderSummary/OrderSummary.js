import Auxiliary from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(key => {
        return <li key={key}>
            <span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}
        </li>
    })

    return (
        <Auxiliary>
            <h3>Order</h3>
            <p>Ingredients are:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout!</p>
            <Button btnTypes="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnTypes="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Auxiliary>
    );

};

export default orderSummary;