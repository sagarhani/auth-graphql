import React from 'react';

class AuthForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
    }

    onSubmit(event) {
        event.preventDefault();


        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <div className="row">
                <form onSubmit={this.onSubmit.bind(this)} className="col s4">
                    <div className="input-field">
                        <label>Email</label>
                        <input 
                            placeholder="Email"
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                    </div>
                    <div className="input-field">
                        <label>Password</label>
                        <input 
                            placeholder="Password"
                            type="password"
                            value={this.state.password}
                            onChange={e => this.setState({ password: e.target.password })}
                        />
                    </div>
                    <div className="errors">
                        {this.props.errors.map(error => <div key={error}>{error}</div>)}
                    </div>
                    <button className="btn">Submit</button>
                </form>
            </div>
        );
    }
}

export default AuthForm;