import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const buildControls = (props) => {

    const {addIngredient, removeIngredient, disabledControl,price, purchasable, orderd} = props

    const controls = [
        {label: 'Salad', type: 'salad'},
        {label: 'Bacon', type: 'bacon'},
        {label: 'Cheese', type: 'cheese'},
        {label: 'Meat', type: 'meat'},
    ]

    return (
        <div className="BuildControls">
            <p className="price">Current Price: {props.price.toFixed(2)}</p>
            {controls.map(item => {
                return <BuildControl key={item.label}
                                    label={item.label}
                                     type={item.type}
                                     addIngredient={() => {addIngredient(item.type)}}
                                     removeIngredient={() => {removeIngredient(item.type)}}
                                     disabledControl={disabledControl[item.type]}
                />
            })}
            <button className="OrderButton" disabled={!purchasable} onClick={orderd}>ORDER</button>
        </div>
    )

};

export default buildControls;