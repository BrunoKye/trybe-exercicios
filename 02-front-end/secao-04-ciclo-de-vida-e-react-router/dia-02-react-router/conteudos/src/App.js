import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';
import './App.css';

class App extends Component {
  state = {
    user: {
      username: 'João',
      password: 1234,
    },
  };

  render() {
    const { user } = this.state;
    
    return (
      <BrowserRouter>
        <div className='nav'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/users/1'>Users</Link>
          <Link to='/strict-access'>Strict Access</Link>
        </div>
        
        <Switch>
          <Route 
            path='/strict-access' 
            render={ (props) => 
              <StrictAccess {...props} user={ user } /> 
            } 
          />

          <Route 
            exact path='/users/:id' 
            render={ (props) => 
              <Users {...props} greetingsMessage="Good Morning" /> 
            } 
          />

          <Route exact path='/about' component={ About } />
          <Route exact path='/' component={ Home } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
