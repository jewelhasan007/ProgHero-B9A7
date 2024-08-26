
import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Recipes from './components/recipe/Recipes'
import Bookmarks from './Bookmarks'



function App() {

const [cooks, setCooks] = useState([]);

  const handleCooks =  recipe => {
    const newCooks = [...cooks, recipe];
    setCooks(newCooks); 

  }

  const handleRemove = recipe_id =>{
    console.log('Remove', recipe_id);
    const remainingBookmarks = cooks.filter(bookmark=>bookmark.recipe_id !== recipe_id)
    setCooks(remainingBookmarks)

  }
  return (
    <>
     
  <Header></Header>
  <div className='flex grid-cols-2'>
  <Recipes className="w-2/3" handleCooks={handleCooks} handleRemove={handleRemove}></Recipes>
  <Bookmarks className="w-1/3" cooks={cooks} ></Bookmarks>
  
  </div>

     
    </>
  )
}

export default App
