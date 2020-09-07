import React, {Conponent, Component} from 'react';
import './App.css';
import logo from './logo-large.png';
import View from './View';
import AddPost from './AddPost';


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      activeView: 'landing',
    }
  }

  setActiveView = (view) => {
    this.setState({activeView:view})
  }

  render(){
    return (
      <div classNameName="app">

        <AddPost path="posts"/>

        <View viewName="landing" activeView={this.state.activeView} classNameName="landing landing-page">

            <div classNameName="landing-background">
            </div>

            <div classNameName="container landing-start"  onClick={
                  ()=>this.setActiveView('landing-Register')
              }>
                <div classNameName="logo">
                    <img src={logo} classNameName="mw-100" alt="logo" />
                </div>

                <div classNameName="tapToStart">
                    Tap anywhere to begin
                </div>
            </div>

        </View>

        <View viewName="landing-Register" activeView={this.state.activeView} classNameName="landing landing-register">
          <div classNameName="landing-background">
          </div>

            <div classNameName="container signup">

                <div classNameName="logo">
                    <img src={logo} classNameName="mw-100" alt="logo" />
                </div>

                <div classNameName="signupBox">
                    <h3>Sign Up</h3>

                    <form classNameName="register-form">
                        <div classNameName="form-group">
                            <input type="text" classNameName="form-control" name="username-input" id="username-input" placeholder="Username"/>
                        </div>
                        <div classNameName="form-group">
                            <input type="email" classNameName="form-control" name="email-input" id="email-input" placeholder="Email Address"/>
                        </div>
                        <div classNameName="form-group">
                            <input type="password" classNameName="form-control" name="password-input" id="password-input" placeholder="Password"/>
                        </div>
                        <div classNameName="form-group">
                            <select classNameName="form-control custom-select" name="region-input" id="region-input">
                                <option value="Auckland" selected>Auckland</option>
                                <option value="Northland">Northland</option>
                                <option value="Waikato">Waikato</option>
                                <option value="Wellington">Wellington</option>
                            </select>
                        </div>
                        <div classNameName="subtext">
                            Already have an account? <span onClick={
                              ()=>this.setActiveView('landing-Login')
                            }>Login.</span>
                        </div>
                        
                        <div classNameName="buttons">
                            <button type="button" classNameName="btn btn-light btn-back">
                            <i classNameName="fas fa-arrow-left" onClick={
                              ()=>this.setActiveView('landing')
                            }></i>
                            </button>
                            <button type="submit" classNameName="btn btn-primary btn-next" onClick={(e)=>{
                              e.preventDefault()
                            }}>
                            Next
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </View>

        <View viewName="landing-Login" activeView={this.state.activeView} classNameName="landing landing-login">
          <div classNameName="landing-background">
          </div>

            <div classNameName="container signin">

                <div classNameName="logo">
                    <img src={logo} classNameName="mw-100" alt="logo" />
                </div>

                <div classNameName="signinBox">
                    <h3>Login</h3>

                    <form classNameName="login-form">
                        <div classNameName="form-group">
                            <input type="email" classNameName="form-control" name="email-input" id="email-input" placeholder="Email Address"/>
                        </div>
                        <div classNameName="form-group">
                            <input type="password" classNameName="form-control" name="password-input" id="password-input" placeholder="Password"/>
                        </div>
                        <div classNameName="subtext">
                            Don't have an account? <span onClick={
                              ()=>this.setActiveView('landing-Register')
                            }>Sign Up.</span>
                        </div>
                        
                        <div classNameName="buttons">
                            <button type="button" classNameName="btn btn-light btn-back">
                            <i classNameName="fas fa-arrow-left" onClick={
                              ()=>this.setActiveView('landing')
                            }></i>
                            </button>
                            <button type="submit" classNameName="btn btn-primary btn-next"
                            onClick={(e)=>{
                              e.preventDefault()
                            }}>
                            Next
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </View>

      </div>
    )
  }

}

export default App;
