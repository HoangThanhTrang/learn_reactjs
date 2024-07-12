import './App.css';
import React from 'react';
import {BrowserRouter as Router,Route,Routes  } from 'react-router-dom'
import User from './user/pages/User';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () =>{
  return (
    <Router>  
      <MainNavigation />
      <main>
        <Routes>
          <Route path='/' element={<User />}  />
        </Routes>
        <Routes>
          <Route path='/place/new' element={<NewPlace />} />
        </Routes>
        {/* <Navigate to='/' /> */}
      </main>
    </Router>
  )
}
export default App;
