import logo from './logo.svg';
import './App.css';
import {Home} from './Components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Shevchenko, Lesya, Franko, Main } from './Components/Components';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}>
      <Route path='Main' element={<Main></Main>}></Route>
      <Route path='Shevchenko' element={<Shevchenko></Shevchenko>}> </Route>
      <Route path='Lesya' element={<Lesya></Lesya>}></Route>
      <Route path='Franko' element={<Franko></Franko>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
