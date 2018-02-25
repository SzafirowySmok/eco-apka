import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Navigation from './components/navigation.component';
import RecipesContainer from './containers/recipes.container';
import RecipeDetailsContainer from './containers/recipe-details.container';
//import BreakfastContainer from './containers/breakfast.container';
//import SaladContainer from './containers/salad.container';
//import SoupContainer from './containers/soup.container';
//import DinnerContainer from './containers/dinner.container';
//import DessertContainer from './containers/dessert.container';


export default (
    <Route path='/' component={Navigation}>
        <IndexRoute component={RecipesContainer} />
         <Route path='/:id' component={RecipeDetailsContainer} />
        {/*<Route path='breakfast' component={BreakfastContainer} />
        <Route path='salad' component={SaladContainer} />
        <Route path='soup' component={SoupContainer} />
        <Route path='dinner' component={DinnerContainer} />
        <Route path='dessert' component={DessertContainer} /> */}
    </Route>
);
