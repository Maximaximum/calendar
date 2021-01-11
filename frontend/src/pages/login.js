import React from 'react';
import { connect } from 'react-redux';
import { userLog, addUser } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegister: true,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    this.setState({
      isRegister: !this.state.isRegister
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const login = document.getElementById('login').value.toString();
    const password = document.getElementById('password').value.toString();

    if(!this.state.isRegister) {
      this.props.userLog({ login: login, password: password });

    } else {
      const repeatPassword = document.getElementById('repeatPassword').value.toString();

      if(password === repeatPassword)  {
        this.props.addUser({ login: login, password: password });
      }
      else {
        alert('Your passwords are not the same')
      }
    }
  }

  render() {
    return (
      this.props.isLogged ?

      <div className="logout">
        <h1>You logged in as {this.props.isLogged}</h1>
        <form>
          <input type="submit" id="logout-button" value="LOGOUT" />
        </form>
      </div> :

      <div className="login">
        <input className="switch" type="range" min="1" max="2" onChange={this.handleChange}/>
        <h1 className="login-title">{!this.state.isRegister ? "Log In" : "Sign Up"}</h1>

        <form className="loginPage-form" onSubmit={this.handleSubmit}>
          <label htmlFor="login">Enter your login</label>
          <input id="login" type="text" pattern="^[a-z]+$" required/>
          <label htmlFor="password">Enter your password</label>
          <input id="password" type="password" required/>

          {this.state.isRegister ?
          <>
            <label htmlFor="repeatPassword">Repeat your password</label>
            <input id="repeatPassword" type="password" required/>
          </> : null}

          <input id="submit" type="submit" value="OK"/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    isLogged: store.isLogged
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLog: (dataFromUser) => dispatch(userLog(dataFromUser)),
    addUser: (dataFromUser) => dispatch(addUser(dataFromUser))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
