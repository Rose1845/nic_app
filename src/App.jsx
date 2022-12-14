
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import AccountModal from "./components/AccountModal";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import Courses from "./pages/Courses";

function App() {
  const isLoggedIn=useSelector(state=>state.auth.isLoggedIn);
  console.log(isLoggedIn)
  return (
    <div className="App">                     
      <Router>
      {!isLoggedIn && <Auth/>}
      {isLoggedIn &&  <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about"element={<About/>}/>        
          <Route path="/services"element={<Services/>}/>
          <Route path="/contact"element={<Contact/>}/>
          <Route path="/courses"element={<Courses/>}/>
          
        </Routes>
        </Layout>}
        
      </Router>
    </div>
  );
}
export default App;
