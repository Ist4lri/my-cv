import Navbar from "./components/Navbar/";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import HomePage from './components/HomePage/';
import Skills from './components/Skills/';
import Experience from './components/Experience/';
import Contact from './components/Contact/';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Contact" element={<Contact />} />
      </Routes>
  </Router>
  );
}

export default App;