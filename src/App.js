
import { Routes, Route } from 'react-router-dom'
import {  Stay } from './pages/Stay';
import { Home } from './pages/Home';

function App() {

  return (

   <><Routes>
    <Route path='/' element={<Home />} />
    <Route path='/place-to-stay' element={<Stay />} />
   </Routes>
   </>
  );
}

export default App;
