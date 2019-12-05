import React from "react";
import { User } from "../models/User";
import { Hasher } from "./hasher";
export class UserPage extends React.Component {
  onEdit(edit) {
    this.setState({ editing: false });
    this.setState(prevState => {
      if (edit.userName) {
        prevState.user.userName = edit.userName;
      }
      if (edit.email) {
        prevState.user.email = edit.email;
      }
      if (edit.name) {
        prevState.user.name = edit.name;
      }
      if (edit.politicalAlignment) {
        prevState.user.politicalAlignment = edit.politicalAlignment;
      }

      return prevState;
    });
    this.setState({
      userName: "",
      password: "",
      email: "",
      name: "",
      politicalAlignment: ""
    });
    let sections = document.querySelectorAll(".editView");
    sections.forEach(function (section) {

      section.classList.remove("active");
    });
  }

  editView() {
    this.setState({ editing: true });
    let sections = document.querySelectorAll(".editView");
    // sections.forEach(function (section) {
    //         section.classList.remove('active');
    // });
    //let view = document.getElementById("editView");
    sections.forEach(function (section) {
      section.classList.add("active");
    });
    // if (view) {
    //   view.classList.add("active");
    // }
  }
  state = {
    editing: false,
    userName: "",
    password: "",
    email: "",
    name: "",
    politicalAlignment: "",
    user: new User(
      "theRealObama",
      "password",
      "obama@gmail.com",
      "Barack Obama",
      "Democrat"
    )
  };
  render() {
    return (
      <div>
        <div className="Account Page">
          <h1>Account Info Page</h1>
        </div>
        <div className="accountUserName">
          <h2>User Name</h2>
          {this.state.user.userName}
          <br />
          <div className="editView">


            <input
              type="text"
              id="editBox"
              name="userName"
              className="form-control bg-light border border-primary"
              placeholder="Enter a new name"
              value={this.state.userName}
              onChange={e => this.setState({ userName: e.target.value })}
            />


          </div>
        </div>
        <div className="accountPassword">
          <h2>Password</h2>
          <Hasher password={this.state.user.password} />
          <div className="editView">
            <input
              type="text"
              id="editBox"
              name="password"
              className="form-control bg-light border border-primary"
              placeholder="Enter a new password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>
        </div>
        <div className="accountEmail">
          <h2>Email</h2>
          {this.state.user.email}
          <br />
          <div className="editView">
            <input
              type="text"
              id="editBox"
              name="email"
              className="form-control bg-light border border-primary"
              placeholder="Enter a new email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
        </div>
        <div className="accountName">
          <h2>Name</h2>
          {this.state.user.name}
          <br />
          <div className="editView">
            <input
              type="text"
              id="editBox"
              name="name"
              className="form-control bg-light border border-primary"
              placeholder="Enter a new account name"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
            />
          </div>
        </div>
        <div className="accountPoliticalAlignment">
          <h2>Political Alignment</h2>
          {this.state.user.politicalAlignment}
          <br />
          <div className="editView">
            <input
              type="text"
              id="editBox"
              name="politicalAlignment"
              className="form-control bg-light border border-primary"
              placeholder="Enter a new political alignment"
              value={this.state.politicalAlignment}
              onChange={e =>
                this.setState({ politicalAlignment: e.target.value })
              }
            />
          </div>
        </div>

        <div className="editView">
          <button
            type="button"
            className="button btn btn-success btn-block"
            id="button"
            onClick={() => this.onEdit(this.state)}
          >
            Submit
          </button>
        </div>
        <div className="edit">
          {!this.state.editing && <button
            type="button"
            className="btn btn-success btn-block"
            id="edit"
            onClick={() => this.editView()}
          >
            Edit Profile
            </button>}

        </div>

      </div>
    );
  }
}

export default UserPage;
