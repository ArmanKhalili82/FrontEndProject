import FullPage from "./components/UI/FullPage";
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <FullPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
