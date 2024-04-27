
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/user/Login';
import Signup from './components/user/Signup';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='signup' element={<Signup />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
