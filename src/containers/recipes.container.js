import React, {Component} from 'react';
import {connect} from 'react-redux';
import RecipesList from '../components/recipes-list.component';
import {getRecipes} from '../actions/actions-recipes';

class RecipesContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.dispatch(getRecipes());
    }
    render() {
        return (
            <div>
                <RecipesList recipes={this.props.recipes} />
            </div>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        recipes: store.recipesReducer.recipes
    };
};

export default connect(mapStateToProps)(RecipesContainer);