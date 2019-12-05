import React, { Component, Redirect } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import ResetForm from './pages/ResetForm';
import CandidatePage from './pages/CandidatePage';
import Search from './pages/Search';
import './App.css';
import UserPage from './pages/UserPage';
import { MoreInfo } from './pages/MoreInfo';
import { SecurityQuestions } from './pages/SecurityQuestions';
class App extends Component {

  component() {

  }

  state = {
    splitScreen: true
  }

  updateScreenSplit = (arg) => {
    if (this.state.splitScreen != arg) this.setState({ splitScreen: arg });
  }

  render() {
    return (
      <Router basename="/">
        <div className="App bg-light">
          <aside style={{ width: this.state.splitScreen ? "90vw" : "15vw", filter: this.state.splitScreen ? 'blur(0px)' : 'blur(4px)' }}>
            <div className="backgroundImg"></div>
          </aside>

          <div className="App__Form">

            {this.state.splitScreen ? (<div><h1 style={{ textAlign: 'center' }}>Welcome to GovLocal!</h1> <br></br></div>) : ""}

            {this.state.splitScreen &&
              <div className="btn-group btn-block">
                <NavLink to="/sign-in" className="btn btn-secondary btn-lg">Sign In</NavLink>
                <NavLink exact to="/" className="btn btn-secondary btn-lg">Sign Up</NavLink>
              </div>
            }

            <Route exact path="/" component={SignUpForm} />
            <Route path="/setup-security" component={SecurityQuestions} />
            <Route path="/sign-in" component={() => <SignInForm updateScreenSplit={this.updateScreenSplit} />} />
            <Route path="/reset-password" component={ResetForm} />

            <Route path="/user" component={UserPage} />
            <Route path="/moreinfo" component={MoreInfo} />
            <Route path="/candidate" component={() => <CandidatePage updateScreenSplit={this.updateScreenSplit} />} />
            <Route path="/search" component={Search} />
          </div>

          <aside style={{ width: this.state.splitScreen ? "0vw" : "15vw", filter: this.state.splitScreen ? 'blur(0px)' : 'blur(4px)' }}>
            <div className="backgroundImg"></div>
          </aside>
        </div >
      </Router >
    );
  }
}

export default App;
