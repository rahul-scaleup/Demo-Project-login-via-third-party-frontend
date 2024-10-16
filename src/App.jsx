import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App =  () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id');
  const name = urlParams.get('name');
  const picture = urlParams.get('picture');
  const email = urlParams.get('email');
  const gender = urlParams.get('gender');

  console.log(id + " " + name + " " + gender + " " );
  /*
  fetch('http://localhost:8080/')
  .then((response)=>{
    return response.json();
  })
  .then(data => {
    console.log(data);
  });

  const getData = () => {
    fetch('http://localhost:8080/')
      .then((response)=>{
        return response.json();
      })
      .then(data => {
        console.log(data);
      });
  };
  */
  if(id == null) {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">MyApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              
            </Nav>
            <Nav>
              <a href="http://localhost:8080/auth/google"><Button variant="outline-primary" >Login with Google</Button></a>
              <a href="http://localhost:8080/auth/github"><Button variant="outline-dark" onClick>Login with GitHub</Button></a>
              <a href="http://localhost:8080/auth/facebook"><Button variant="outline-primary" onClick>Login with Facebook</Button></a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="container text-center mt-5">
          <h1>Welcome to MyApp</h1>
          <p>Please login to continue.</p>
        </div>
      </div>
    );
  }else {
    return (
      <>
      <div className="container text-center mt-5">
          <h1>Welcome to your profile {name}</h1>
          <br/>
          <hr/>
          <br/>
          <h4>Email : {email}</h4>
          <img src={picture} alt="alt text"/>
          <br/>
          <br/>
      <a href="http://localhost:8080/auth/logout" ><Button variant="outline-dark"> Logout </Button></a>
      </div>
      {console.log("ppp " + picture)}
      

      </>
    );
  }
};

export default App;
