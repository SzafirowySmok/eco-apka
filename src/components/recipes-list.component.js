import React from 'react';
import {Link} from 'react-router';
import Recipe from './recipe.component';

const RecipesList = (props) => (
    <div>
        {props.recipes.map(recipe => {
            return (
                <div key={recipe.id}>
                    <Link to={'/' + recipe.id}>
                        <Recipe recipe={recipe} />
                    </Link>
                </div>
            )
        })}
    </div>
)
export default RecipesList;