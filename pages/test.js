import React from "react";
import { connect } from "react-redux";
import { Layout } from './components/layout'
import userAction from "../redux/action/userAction";
import privateAuth from "../Auth/privateAuth";
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
            <>
            <Layout title='Test'>
                <div className="container mt-5">
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
                        <br/>
                        <input type='submit' />
                    </form>
                { this.props.auth.isLoading == true ? <p style={{ textAlign: 'center' }}>Loading....</p> : null }
            <br />
            <button onClick={this.signOut}> Sign Out!</button>
            </div>
            </Layout>
            </>
        )
    }
}

export default connect(
    state => state,
    userAction
)(privateAuth(Test))