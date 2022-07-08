import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";


import Home from "./pages/home/Home"
import Post from "./pages/post/Post"


function App() {
  return (
    <div className="App">

      <Router>
            <div> 
              <div className="navigation">
                <div className="logo">Apiki</div>
                <nav>
                  <ul>
                    <li>
                      
                      <Link to="/">Home</Link>
                    </li>
                    {/* <li>
                      <Link to="/Post">PostContet</Link>
                    </li> */}
                  </ul>
                </nav>
              </div>

              

              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Routes>
                <Route path="/Post:slug" element={<Post />} />
                                
                <Route path="/" element={<Home />} />
                
              </Routes>
            </div>
      </Router>
      
    </div>
  );
}

export default App;
