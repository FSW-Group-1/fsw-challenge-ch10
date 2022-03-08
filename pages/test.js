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

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Handling Submit')
        const { email, password}  = this.state;
        const loginData = {
            email,
            password
        }
        await this.props.loginUser(loginData)
        console.log(this.props.user)
        console.log(this.props.user.user.accessToken)
        

    }
    render(){
        return(
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
        )
    }
}

export default connect(
    state => state,
    userAction
)(Test)