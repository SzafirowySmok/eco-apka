import { GET_RECIPES } from '../actions/actions-recipes';
import recipesData from '../data/recipes.json';

const initialState = {
    recipes: recipesData
};

const recipesReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_RECIPES:
            return Object.assign({}, state, {recipes: state.recipes})
    }
    return state;
}

export default recipesReducer;