import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

export default function NavigationBar() {
  const clicksearch = () => {
    const headers = {
      Authorization:
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjU2Y2EwMTk3LTIzMTgtNGU3Yi1hMzk5LTJhN2M4ZGJhODFkNyIsImlhdCI6MTYwOTU2OTM1NSwic3ViIjoiZGV2ZWxvcGVyLzM2NDFjZmNlLTVhZGYtZjI2ZS02Y2FhLTAwM2MwYjk5OTM0NCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI3Mi44MC4wLjE5NCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.IOHbzvxE7li6CirTdEi3TNflMGwcMePLyqx-GlhWlIwcLTWTUIlSIiUYUuUJm834wYN-BnhdsQUsPZJSeC6RYw',
      'Content-Type': 'application/json',
    };
    axios
      .get('v1/players/%232Y900L99', { headers })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log('error ' + error);
      });

    console.log('click');
  };

  return (
    <div>
      <div>
        <Navbar>
          <Navbar.Brand as={Link} to='/'>
            Clash Royale Star Level
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav className='mr-auto'>
              <Nav.Item eventkey={1} href='/'>
                <Nav.Link as={Link} to='/'>
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item eventkey={2} href='/about'>
                <Nav.Link as={Link} to='/about'>
                  About
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route
            render={function () {
              return <p>Not found</p>;
            }}
          />
        </Switch>
      </div>
    </div>
  );
}
