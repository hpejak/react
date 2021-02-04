import './Burger.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import {element} from "prop-types";

const burger = (props) => {

    let mapIngredients = Object.keys(props.ingredients).map(
        ingredientName => {
            return [...Array(props.ingredients[ingredientName])].map((_,i) =>{
                return <BurgerIngredient key={ingredientName + i} type={ingredientName} />;
            });
        }).reduce((arr, element) => {
            return arr.concat(element)
    }, []);

    if (mapIngredients.length === 0) {
        mapIngredients = <p>Add Ingredients!</p>
    }

    return(
        <div className="Burger">
            <BurgerIngredient type="bred-top"/>
            {mapIngredients}
            <BurgerIngredient type="bred-bottom"/>
        </div>
    );
}

export default burger;