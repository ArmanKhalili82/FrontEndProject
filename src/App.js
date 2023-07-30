import FullPage from "./components/UI/FullPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'
import Services from './pages/Services'
import About from './pages/About'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<FullPage />} />
            <Route path='/Shop' element={<Shop />} />
            <Route path='/Services' element={<Services />} />
            <Route path='/About' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
