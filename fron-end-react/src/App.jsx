import './App.css';
import GoalList from './components/GoalList/GoalList'
import NewGoal from './components/NewGoal/NewGoal';
import React,{useState} from 'react';

function App() {
  const [courseGoal,setCourseGoal]  = useState([
    {id:1,text:'Finish the course'},
    {id:2,text:'Learn all about the Course Main Topic'},
    {id:3,text:'Help ohter students in the Course Q&A'}
  ])
  const addNewGoalHandler = newGoal =>{
    setCourseGoal(courseGoal.concat(newGoal))
  }
  return (
    <div className="App">
      <NewGoal onAddGoal={addNewGoalHandler} />
     <GoalList goals= {courseGoal}/>
    </div>
  );
}

export default App;
