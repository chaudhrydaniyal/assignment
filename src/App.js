import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import BlogPage from './blogPage/blogPage';
import Home from './homePage/home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
