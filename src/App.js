import './App.css';
import Login from './Pages/Login';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Welcome from './Pages/Welcome';

function App() {
  return (
    <div className="App">
      <Router>
    <Routes>
      <Route path="/" element={<Welcome/>}/>
    </Routes>
      </Router>
    </div>
  );
}

export default App;
