import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
          <div className="container">
            <Routes>
              <Route exact path="/" element= {<ListEmployeeComponent/>}/>
              <Route exact path="/employees" element= {<ListEmployeeComponent/>}/>
            </Routes>
          </div>
          <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
