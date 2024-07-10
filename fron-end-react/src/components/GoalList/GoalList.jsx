import React from "react";
import './GoalList.css'

const GoalList = props => {
    return (
        <div>
        <h2 className="color-pink">Nói dài vl</h2>
        <ul className="goal-list">
            {props.goals.map(goal =>{
                return <li key={goal.id}>{goal.text}</li>
            })}
        </ul>
    </div>
    );
};
      

export default GoalList;