import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "./App.css";
import Header from "../components/header"
import Footer from "../components/footer"

import Home   from "./home";
import About  from "./about";

import Login    from "./login";
import P_index  from "./p_index";
import P_create from "./p_create";
import P_view   from "./p_view";
import P_edit   from "./p_edit";
import C_index  from "./c_index";
import C_view   from "./c_view";
import M_create from "./m_create";

const App = () => (
  <Router>
    <div>
      <Header />
      
      <Route exact path="/"         component={Home}/>
      <Route exact path="/about"    component={About}/>
      
      <Route exact path="/login"    component={Login}/>
      <Route exact path="/p/"       component={P_index}/>  
      <Route exact path="/p/new"    component={P_create}/>
      <Route exact path="/p/:id"    component={P_view}/>
      <Route exact path="/p/:id/edit"   component={P_edit}/>
      <Route exact path="/c/"       component={C_index}/>
      <Route exact path="/c/:id"    component={C_view}/>
      <Route exact path="/m/new"    component={M_create}/>
      
      <Footer />
    </div>
  </Router>
)

export default App