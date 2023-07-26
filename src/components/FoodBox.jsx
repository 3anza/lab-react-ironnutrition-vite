// Your code here
import React from "react";

function FoodBox ({food, onDelete}) {
    const { id, name, calories, image, servings } = food
    const totalCalories = servings * calories
 
    const handleDelte = () => {
        onDelete(id)
    }

    return (
        <div className="food-box">
            <h2>{name}</h2>

            <img src={image} alt={name}
            style={{ height: "250px" }} />

            <p>Calories: {calories}</p>
            <p>Servings: {servings}</p>

            <p>
                <b>Total Calories: {totalCalories} </b> kcal
             </p>

             <button onClick={handleDelte}>Delete</button>
        </div>
    )
}

export default FoodBox;
    
