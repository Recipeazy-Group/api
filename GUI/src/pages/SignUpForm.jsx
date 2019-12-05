import React from 'react';
import { NavLink } from 'react-router-dom';
import { User_DB } from '../api/User_DB';
class SignUpForm extends React.Component {
  userDB = new User_DB();
  constructor() {
    super();

    this.state = {
      isCandidate: undefined,
      email: '',
      password: '',
      name: '',
      hasAgreed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  submit(e) {
    e.preventDefault();
    this.userDB.createNewUser(this.state.name, this.state.password, this.state.isCandidate, this.state.email);
    console.log('The form was submitted with the following data:');
    console.log(this.state);
  }

  render() {
    return (
      <div className="FormCenter">
        <form onSubmit={e => this.submit(e)}>
          <div className="field form-group">
            <label className="field__Label" htmlFor="name">Full Name</label>
            <input type="text" id="name" className="form-control bg-light" placeholder="Enter your full name" name="name" value={this.state.name} onChange={e => this.handleChange(e)} />
          </div>
          <div className="field">
            <label className="field__Label" htmlFor="password">Password</label>
            <input type="password" id="password" className="form-control bg-light" placeholder="Enter your password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
          </div>
          <div className="field">
            <label className="field__Label" htmlFor="email">E-Mail Address</label>
            <input type="email" id="email" className="form-control bg-light" placeholder="Enter your email" name="email" value={this.state.email} onChange={e => this.handleChange(e)} />
          </div>


          <label htmlFor="partySelect" className="field__Label">Select Account Type</label>
          <select id="partySelect" class=" button form-control form-control-lg bg-light" onChange={e => (this.setState({ isCandidate: e.target.value === 1 ? true : false }))}>
            <option selected disabled></option>
            <option value={1} className="form-control bg-light">Candidate</option>
            <option value={0} className="form-control bg-light" >Voter</option>
          </select>

          <div className="field">
            <NavLink to="/setup-security" className="signUp">
              <button className="btn signInButton btn-lg btn-block ">Sign Up</button></NavLink>
          </div>
        </form>
      </div >
    );
  }
}

export default SignUpForm;