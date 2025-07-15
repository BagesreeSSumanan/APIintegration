import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dasboard';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/dashbaord' element={<Dashboard/>} />
    </Routes>
  );
}

export default App;