// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashBoard from './DashBoard';
import CreateBookingComponent from './CreateBookingComponent'; // Create this component
import ReviewComments from './ReviewComments';
import Login from './Login';

function App() 
{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/dashboard" element={<DashBoard/>}/>
                <Route path="/CreateBookingComponent" element={<CreateBookingComponent/>} />
                <Route path="/ReviewComments" element={<ReviewComments/>} />
            </Routes>
        </Router>
    );
}

export default App;
