import React from 'react';
import './../App.css'

class ResetForm extends React.Component {
    state = {
        email: ""
    };

    render() {
        return (
            <div>
                <h1 className="FormTitle__Active">Reset Password</h1>
                <h2 className="formDescription">Forgot your password? Don't worry--we'll email you reset instructions.</h2>
                <div className="FormCenter">
                    <form onSubmit={() => this.onSubmit()}>
                        <div className="form-group">
                            <div className="">
                                <label className="field__Label" htmlFor="email">E-Mail Address</label>
                                <input type="email" id="email" className="form-control bg-light" placeholder="Enter your email" name="email" value={this.state.email} onChange={() => this.handleChange} />
                            </div>
                            <div>
                                <label className="field__Label" htmlFor="secQ1">Mother's Maiden Name</label>
                                <input className="form-control bg-light" id="secQ1" placeholder="Enter your mother's maiden name." />
                            </div>
                            <div>
                                <label className="field__Label" htmlFor="secQ2">City You Were Born In</label>
                                <input className="form-control bg-light" id="secQ2" placeholder="Enter your birthplace." />
                            </div>
                        </div>

                        <div className="field">
                            <button className="btn signInButton btn-lg btn-block">Retrieve Credentials</button>
                        </div>

                    </form>
                </div>
            </div>
        );

    }

    onSubmit() {

    }

}

export default ResetForm;