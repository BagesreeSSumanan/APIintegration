import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Login';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route path='/' element={<Login/>} />
    
    </Routes>
  );
}

export default App;