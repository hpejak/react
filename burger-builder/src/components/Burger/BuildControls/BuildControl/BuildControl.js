import './BuildControl.css'

const buildControl = (props) => {

    const {addIngredient, removeIngredient, disabledControl} = props

    return (<div className="BuildControl">
        <div className="Label">{props.label}</div>
        <button className="Less" onClick={removeIngredient} disabled={disabledControl}>Less</button>
        <button className="More" onClick={addIngredient}>More</button>
    </div>)

};

export default buildControl;