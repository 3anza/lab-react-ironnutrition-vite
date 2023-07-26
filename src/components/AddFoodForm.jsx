// Your code here
import React, { useState } from "react";

function AddFoodForm({addFood}) {
    const form = { 
        name: "", 
        image: "", 
        calories: "", 
        servings: "", 
    }

    const [formData , setFormData] = useState(form)

    const handleChange = (event) =>{
        const { name, value } = event.target
        setFormData((prevForm) => ({
            ...prevForm, [name]: value
        }))
    } 

    const handleSubmit = (event) => {
        event.preventDefault()
        addFood(formData)
        setFormData(form)

    }

    return (
        <form onSubmit={handleSubmit}>
            <>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required/>
            </div>
            </>
            <>
            <div>
                <label htmlFor="image">Image: </label>
                <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} required/>
            </div>
            </>
            <>
            <div>
                <label htmlFor="calories">Calories: </label>
                <input type="number" id="calories" name="calories" value={formData.calories} onChange={handleChange} required/>
            </div>
            </>
            <>
            <div>
                <label htmlFor="servings">Servings: </label>
                <input type="number" id="servings" name="servings" value={formData.servings} onChange={handleChange} required/>
            </div>
            </>
            <button type="submit">Create</button>
            
        </form>
    )
}

export default AddFoodForm;