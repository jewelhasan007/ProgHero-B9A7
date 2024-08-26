import { useEffect, useState } from "react";
import Recipe from "./Recipe";


const Recipes = ({handleCooks, handleRemove}) => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipe.json')
        .then(res => res.json())
        .then(data => setRecipes(data))

    },[])

    return (
        <div className="flex  w-2/3">
         <div className="grid grid-cols-2 justify-between">
         {
                recipes.map(recipe => <Recipe  recipe={recipe} handleCooks={handleCooks} handleRemove={handleRemove}></Recipe>)
            }
         </div>
           
         
        </div>
       
    );
};

export default Recipes;