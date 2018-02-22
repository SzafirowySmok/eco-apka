export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPE = 'GET RECIPE';
export const SEARCH_RECIPE = 'SEARCH_RECIPE';
export const SEARCH_ALLERGEN = 'SEARCH_ALLERGEN';
export const SET_MEAL = 'SET_MEAL';

export function getRecipes() {
    return {
        type: GET_RECIPES
    }
}

export function getRecipe(id) {
    return {
        type: GET_RECIPE,
        id
    }
}

export function searchRecipe(searchText) {
    return {
        type: SEARCH_RECIPE,
        searchText
    }
}

export function searchAllergen(allergenName) {
    return {
        type: SEARCH_ALLERGEN,
        allergenName
    }
}

export function setMeal(name) {
    return {
        type: SET_MEAL,
        name
    }
}