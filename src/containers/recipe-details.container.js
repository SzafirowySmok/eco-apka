import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getRecipe} from '../actions/actions-recipes';
import RecipeDetails from '../components/recipe-details.component';

class RecipeDetailsContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.dispatch(getRecipe(this.props.params.id));
    }
    render() {
        return (
            <RecipeDetails recipe={this.props.selectedRecipe}  />
        )
    }
}

const mapStateToProps = function (store) {
    return {
        selectedRecipe: store.recipesReducer.selectedRecipe
    };
};

export default connect(mapStateToProps)(RecipeDetailsContainer);