import React from 'react'
import { NavLink } from 'react-router-dom'

export class SecurityQuestions extends React.Component {
    render() {
        return (
            <div className="form-group">
                <h1>Setup Security Questions</h1>
                <div>
                    <label className="field__Label" htmlFor="secQ1">Mother's Maiden Name</label>
                    <input className="form-control bg-light" id="secQ1" placeholder="Enter your mother's maiden name." />
                </div>
                <div>
                    <label className="field__Label" htmlFor="secQ2">City You Were Born In</label>
                    <input className="form-control bg-light" id="secQ2" placeholder="Enter your birthplace." />
                </div>


                <div className="field">
                    <NavLink to="/sign-in"><button className="btn signInButton btn-lg btn-block">Sign Up</button></NavLink>
                </div>
            </div>

        );
    }
}

