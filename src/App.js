import './App.css';
import Login from './Pages/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from './Pages/Welcome';
import BlogDispaly from './Pages/BlogDispaly';
import PageNotFound from './Pages/PageNotFound';
import BlogState from './BlogContext/BlogState';



function App() {
  return (
    <div className="App" style={{overflow:"hidden",background:"whitesmoke"}}>
      <BlogState>
      <Router>

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/blogdisplay/:id" element={<BlogDispaly />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
      </BlogState>
    </div>
  );
}

export default App;
