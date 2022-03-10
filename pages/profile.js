import React, { Component } from 'react';
import { Card, Col, Row, Container, Form, Button, Modal, } from 'react-bootstrap';
import { Layout } from './components/layout'

import axios from 'axios';
import { connect } from "react-redux";
import userAction from "../redux/action/userAction";



class Profile extends Component{


  constructor(props){
    super(props);

    this.state ={
      show: false,
      data: {}
    };

  }

  set = name => event => {
    console.log(event.target.value)  
    this.setState({[name]: event.target.value});
  }

  componentDidMount(){
    const config = {
      headers: {
          authorization: `${localStorage.getItem('accessToken')}`,
      },
  }
  axios.get(`https://fsw-challenge-ch10-api-dev.herokuapp.com/api/me`, config)
      .then(res => {
          // console.log(res)
          this.setState({
              data: res.data.data,
              username: res.data.data.username,
              description: res.data.data.description,
              point: res.data.data.point,
              image: res.data.data.imageLink
          })
      })
}

  handleSubmit = async (event) => {
    const {username, description, image} = this.state;
    event.preventDefault()

    if(description.length > 200){
      return alert('Your description has surpassed the maximum amount!')
    }
    try {
      await this.props.updateUser({
        username,
        description,
        imageLink: image
      })

      alert('Your information has been updated!')
    } catch (err) {
      console.log(err)
    }
  }

  handleClose = () =>{
    this.setState({
      show: false
    })
  }
  
  handleShow = () => {
    this.setState({
      show: true
    })
  }
  
  render(){
      
      return (
        <Layout title="Profile">
      <div>
        <Container className='mt-5 justify-content-center'>
          <h1>Your Profile</h1>
          <form onSubmit={this.handleSubmit}>
          <Row>
            <Col sm={4}>
              <button type='button' className='border-0' onClick={this.handleShow}>
                <img 
                alt='Profile'
                className='img-thumbnail'
                src={this.state.image}
                />
              </button>
             
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>
                    <input 
                      value={this.state.username || ''} 
                      className='border-0 form-control'
                      onChange={this.set('username')}
                    />
                  </Card.Title>
                  <Card.Text className='form-control border-0'>
                  point: {this.state.point}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Enter image link to update your profile!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <input 
                  className='form-control'
                  onChange={this.set('image')}
                />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>

            <Col sm={4}>
              <Card>
                <Card.Body>
                  <h5>Description</h5>
                <Card.Text>
                  <input 
                    value={this.state.description || ''} 
                    className='border-0 form-control'
                    onChange={this.set('description')}
                    />
                </Card.Text>
                </Card.Body>
              </Card>
            { this.props.auth.isLoading == true ? <input type="submit" value="Loading..." className=' btn btn-success'/> : <input type="submit" value="Submit" className=' btn btn-success'/>}
              
            </Col>
            </Row>
          </form>
        </Container>
      </div>
      </Layout>
      );
}
}

export default connect(
  state => state,
  userAction
)(Profile)

