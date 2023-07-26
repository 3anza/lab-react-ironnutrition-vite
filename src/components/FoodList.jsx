import React, { useState } from 'react'
import foodsJson from "../foods.json"
import FoodBox from "./FoodBox"
import AddFoodForm from "./AddFoodForm"
import Search from './Search'


function FoodList () {
    const [foods, setFoods] = useState(foodsJson);
    
    const deleteFood = (id) => {
        const updatedList = foods.filter((food) => food.id !== id)
        setFoods(updatedList)
    }
    
    const addFood = (newFood) => {
        setFoods([...foods, newFood])
        setResults([...searchResult, newFood])
    }

    const handleSearch = (search) => {
        const searchList = foods.filter((food) =>
          food.name.toLowerCase().includes(search.toLowerCase())
        );
        setResults(searchList);
      };
    

    return (
        <div>
            <h1>Add Food</h1>
        <AddFoodForm addFood={addFood}/>
        <Search onSearch={handleSearch}/>
            <>
            <h1>Food List</h1>
        {foods.map((oneFood) => (
          <>
          <FoodBox key={oneFood.id} food={oneFood} onDelete={deleteFood} />
          <hr/>
          </>
          ))}
            </>
        </div>
    )
}

export default FoodList