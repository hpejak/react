import './Burger.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {

    const mapIngredients = Object.keys(props.ingredients);

    // mapIngredients.map();

    return(
        <div className="Burger">
            <BurgerIngredient type="bred-top"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="bred-bottom"/>
        </div>
    );
}

export default burger;