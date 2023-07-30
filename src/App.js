import FullPage from "./components/UI/FullPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'
import Services from './pages/Services'
import About from './pages/About'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/Shop' element={<Shop />} />
            <Route path='/Services' element={<Services />} />
            <Route path='/About' element={<About />} />
        </Routes>
        <FullPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
