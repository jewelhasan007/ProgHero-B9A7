
const Header = () => {
    return (
        <div className="md:flex justify-around font-bold text-2xl m-6">
            <div>
            <h1>Recipe Calories</h1>
            </div>
           <div>
            <ul className="md:flex justify-between ">
                <li className="pr-4">Home</li>
                <li className="pr-4">Recipes</li>
                <li className="pr-4">About</li>
                <li className="pr-4">Search</li>
                </ul>
           </div>
<div>
    <p>Search</p>
    <button></button>
</div>
        </div>
    );
};

export default Header;