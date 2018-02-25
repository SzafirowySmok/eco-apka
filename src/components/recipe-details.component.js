import React from 'react';

const RecipeDetails = (props) => (
    <div>
        <h1>{props.recipe.name}</h1>
        <ul>
            {props.recipe.components.map(comp => {
                return (
                    <li>{comp}</li>
                )
            })}
        </ul>
    </div>
);

export default RecipeDetails;