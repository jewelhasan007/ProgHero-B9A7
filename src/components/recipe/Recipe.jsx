

const Recipe = ({recipe, handleCooks, handleRemove}) => {

    const {recipe_image, recipe_id, recipe_name, description, ingredients, preparation_time, calories} = recipe


   
    return (
        <div className=" border-solid border-2 rounded-2xl p-5 m-4">
            <img className="rounded-2xl" src= {recipe_image} alt="" />
            <h3 className="font-bold">Recipe Name: {recipe_name}</h3>
            <p>Descriptions:{description}</p>
<hr />
<h2>Ingredients: {ingredients}</h2>

<p>Preparation Times: {preparation_time}</p>
<p>Calories:{calories}</p>
<button className=" rounded-2xl font-bold text-white bg-green-400 p-3 m-4" onClick={()=> handleCooks(recipe)}>Want to Cock</button>
<button className=" rounded-2xl font-bold text-red-500 bg-green-400 p-3 m-4" onClick={()=> handleRemove(recipe_id)}> Remove</button>
        </div>
    );
};

export default Recipe;