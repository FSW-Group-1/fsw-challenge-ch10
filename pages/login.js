import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from "react-redux";
import userAction from "../redux/action/userAction";
import { Form, FormGroup, Label, Input, Container, Col} from 'reactstrap';

import { Layout } from './components/layout'

class Login extends Component{
  
  constructor(props){
      super(props);

      this.state ={};
  }

  set = name => event => {
      this.setState({[name]: event.target.value});
  }

  handleSubmit = async(event) => {
      const { email, password}  = this.state;
      event.preventDefault();
      const loginData = {
        email,
        password
    }
    // Validasi
      if(!email || !password) return alert('Please insert missing credentials!')
      
      await this.props.loginUser(loginData)
      console.log(this.props.user.user)
      console.log(localStorage.getItem('accessToken'))

      //  // Register via Firebase
      //  try {
      //     await firebase.auth().signInWithEmailAndPassword(email, password)
      //      history.push('/');
      //  } catch(error) {
      //      alert('Failed to Login')
      //      console.log(error)
      //  }
  }

  render(){
      return(
        <>
        <Layout title="Login">
        <Col xs={8} sm={12} md={12} className="text-center pt-sm-5 pt-xl-5">
            <h1>LOGIN</h1>                       
        </Col>
        <Container>
        <Form inline onSubmit={this.handleSubmit}>
          
          <FormGroup>
            <Label
              for="exampleEmail"
              hidden
            >
              Your Email
            </Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Your Email"
              type="email"
              onChange={this.set('email')}
            />
          </FormGroup>
          {' '}
          <FormGroup>
            <Label
              hidden
            >
              Your Password
            </Label>
            <Input
              name="password"
              placeholder="Your Password"
              onChange={this.set('password')}
              type="password"
            />
            </FormGroup>
          <a href='/forgot-password'>Forgot your password? Click me!</a><br/>
          <Button className='btn-success'>
            Login
          </Button>
        </Form>
        </Container>
        </Layout>
      </>
      )
  }
}

export default connect(
  state => state,
  userAction
)(Login)