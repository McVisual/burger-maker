import React, {Component} from 'react';
import Aux from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 2,
            cheese: 3,
            meat: 1,

        }
    }

    render() {
        return(
            <Aux>
            <Burger ingredients={this.state.ingredients}/>
            <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;