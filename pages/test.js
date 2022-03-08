import Head from "next/head";
import React from "react";
import { connect } from "react-redux";
import userAction from "../redux/action/userAction";
class Test extends React.Component{
    constructor(props){
        super(props)
    }
    
    set = name => event => {
        // console.log(event.target.value)  
        this.setState({[name]: event.target.value});
    }

    async componentDidMount(){

    }

    useEffect(){
        
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password}  = this.state;
        const loginData = {
            email,
            password
        }
        await this.props.loginUser(loginData)
        console.log(this.props.user.user)
        console.log(localStorage.getItem('accessToken'))
        // console.log(this.props.user.user.accessToken)
    }

    signOut = async (event) => {
        event.preventDefault();
        localStorage.removeItem('accessToken')
        console.log(localStorage.getItem('accessToken'))
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='email' 
                        className="form-control" 
                        placeholder="enter email"
                        onChange={this.set('email')}
                    />

                    <input 
                        type='password' 
                        className="form-control" 
                        placeholder="enter password"
                        onChange={this.set('password')}
                    />

                    <input type='submit' />
                </form>
                { this.props.user.isLoading == true ? <p style={{ textAlign: 'center' }}>Loading....</p> : null }
            <br />
            <button onClick={this.signOut}> Sign Out!</button>
            {localStorage.getItem('accessToken')}
            </div>
        )
    }
}

export default connect(
    state => state,
    userAction
)(Test)