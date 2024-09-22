import Create from './components/Form/Create';
import Detail from './components/Form/Detail';
import MapWithPath from './components/MapWithPath';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={ <MapWithPath/>}/>
          <Route path='/list' element={ <Create/>}/>
          <Route path= 'list/:id' element={ <Detail/>}/>

        </Routes>
    </BrowserRouter>
  );
}

export default App;
