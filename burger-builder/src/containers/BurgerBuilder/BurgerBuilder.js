import {Component} from "react";
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import axios from "axios";

const INGREDIENT_PRICE = {
    salad: 0.1,
    bacon: 0.5,
    cheese: 0.4,
    meat: 0.8
}

axios.defaults.baseURL = 'https://burger-bar-12aa6-default-rtdb.firebaseio.com';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients).map(key => {
            return ingredients[key]
        }).reduce((sum, el) => {return sum + el }, 0);
        this.setState({purchasable: sum > 0})
    }


    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngredient = {
            ...this.state.ingredients
        };
        updateIngredient[type] = updateCount;
        const newPrice = INGREDIENT_PRICE[type] + this.state.totalPrice;
        this.setState({totalPrice: newPrice, ingredients: updateIngredient})
        this.updatePurchaseState(updateIngredient);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) return;
        const updateCount = oldCount - 1;
        const updateIngredient = {
            ...this.state.ingredients
        };
        updateIngredient[type] = updateCount;
        const newPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
        this.setState({totalPrice: newPrice, ingredients: updateIngredient})
        this.updatePurchaseState(updateIngredient);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        this.setState({loading: true});
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'My Name',
                address: {
                    street: 'My address',
                    zipCode: '1234',
                    country: 'myCountry'
                },
                email: 'demo@gmail.com'
            },
            deliveryMethod: '1 day'
        }

        axios.post('/orders.json', order)
            .then(result => {
                this.setState({loading: false, purchasing: false})
                console.log(result)
            })
            .catch(error => {
                this.setState({loading: false, purchasing: false})
                console.log(error)
            })
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = <OrderSummary ingredients={this.state.ingredients}
                             purchaseCanceled={this.purchaseCancelHandler}
                             purchaseContinue={this.purchaseContinueHandler}
                             price={this.state.totalPrice}/>

        if (this.state.loading) {
            orderSummary = <Spinner />
        }

        return (
            <Auxiliary>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls addIngredient={this.addIngredientHandler}
                               removeIngredient={this.removeIngredientHandler}
                               disabledControl={disabledInfo}
                               price={this.state.totalPrice}
                               purchasable={this.state.purchasable}
                               orderd={this.purchaseHandler}/>
            </Auxiliary>
        );
    }
}

export default WithErrorHandler(BurgerBuilder, axios);