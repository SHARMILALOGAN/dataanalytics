import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Module from './pages/Module';
import Register from './pages/Register';
import Retrieve from './pages/Retrieve';
import Query1 from './pages/Query1';
import Query2 from './pages/Query2';
import Query3 from './pages/Query3';
// import Search from './pages/Search';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/module' element={<Module />} />
          <Route path='/register' element={<Register />} />
          <Route path='/retrieve' element={<Retrieve />} />
          <Route path='/query1' element={<Query1 />} />
          <Route path='/query2' element={<Query2 />} />
          <Route path='/query3' element={<Query3 />} />
          {/* <Route path='/search' element={<Search />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;