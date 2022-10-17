
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">                     
      <Router>
        <Layout>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about"element={<About/>}/>        
          <Route path="/services"element={<Services/>}/>
          <Route path="/contact"element={<Contact/>}/>
        </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
