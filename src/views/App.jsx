import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";


import Home from "./pages/Home"
import PostContet from "./pages/PostContet"


function App() {
  
  












  return (
    <div className="App">

      <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  {/* <li>
                    <Link to="/PostContet">PostContet</Link>
                  </li> */}
                </ul>
              </nav>

              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Routes>
                <Route path="/PostContet" element={<PostContet />} />
                                
                <Route path="/" element={<Home />} />
                
              </Routes>
            </div>
      </Router>
      

      
    </div>
  );
}

export default App;
