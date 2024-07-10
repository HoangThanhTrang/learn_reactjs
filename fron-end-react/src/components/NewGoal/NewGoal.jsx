import React, { useState } from "react";

import './NewGoal.css'
const NewGoal = props =>{
    const [value, setValue] = useState('')
    const addGoalhandler = event =>{
        event.preventDefault()
        const newGoal ={
            id: Math.random().toString(),
            text:value
        }
        console.log(newGoal,'newGoal');
        props.onAddGoal(newGoal)
        setValue('')
    }
    return (
        <form className="new-goal" onSubmit={addGoalhandler}>
            <input type="text" value={value} onChange={e => setValue(e.target.value)} />
            <button type="submit">Add Goal</button>
        </form>
    )
}

export default NewGoal