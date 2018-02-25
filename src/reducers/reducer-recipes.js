import { GET_RECIPES, GET_RECIPE } from '../actions/actions-recipes';
import recipesData from '../data/recipes.json';

const initialState = {
    recipes: recipesData,
    selectedRecipe: {components:[]}
};

const recipesReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_RECIPES:
            return Object.assign({}, state, {recipes: state.recipes});
        case GET_RECIPE:
            const selectedRecipe = state.recipes.find(recipe => recipe.id === parseInt(action.id, 10));
            return Object.assign({}, state, {selectedRecipe});
        default:
            return state;
    }
};

export default recipesReducer;