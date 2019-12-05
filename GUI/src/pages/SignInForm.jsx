import React from 'react';
import { NavLink } from 'react-router-dom';
import { User_DB } from '../api/User_DB';
class SignInForm extends React.Component {
  userDB = new User_DB();
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      route: false,
      reload: false
    };

    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }
  toggleChange_voter = () => {
    this.setState({
      route: true,
    });
  }
  toggleChange_candidate = () => {
    this.setState({
      route: false,
    });
  }
  routeTo() {
    if (this.state.route === true) {
      return <div className="field"><NavLink to="/search " className="signIn"><button className="btn signInButton btn-lg btn-block">Sign In</button></NavLink></div>
    }
    else {
      return <div className="field"><NavLink to="/candidate" className="signIn"><button className="btn signInButton btn-lg btn-block">Sign In</button></NavLink></div>
    }
  }

  change(e) {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  submit() {
    this.userDB.getUserLogIn(this.state.email, this.state.password)
      .then(id => {
        this.setState({
          userId: id,
          //id[0]
        });
      });
    console.log('The form was submitted with the following data:');
    console.log(this.state);
  }

  componentDidMount() {
    this.props.updateScreenSplit(true);
  }

  render() {
    var updateScreenSplit = this.props.updateScreenSplit;
    return (
      <div className="">
        <form onSubmit={() => this.submit()}>
          <div className="field form-group">
            <label className="field__Label" htmlFor="email">E-Mail Address</label>
            <input type="email" id="email" className="form-control bg-light" placeholder="Enter your email" name="email" onChange={e => this.setState({ email: e.type.value })} />
          </div>
          <div className="field">
            <label className="field__Label" htmlFor="password">Password</label>
            <input type="password" id="password" className="form-control bg-light" placeholder="Enter your password" name="password" onChange={e => this.setState({ password: e.type.value })} />
          </div>

          <div className="field" id="signInButton" onClick={() => updateScreenSplit(false)}>
            {this.routeTo()}
          </div>

          <NavLink to="/reset-password" className="resetLink">Reset Password</NavLink>

        </form>
      </div >
    );
  }
}

export default SignInForm;