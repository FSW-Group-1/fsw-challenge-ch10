import React, { Component } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { connect } from "react-redux";
import userAction from '../../redux/action/userAction';

class Navbars extends Component{
    constructor(props){
        super(props)

        this.state ={
            user: null
        };

    }

    signOut = async (event) => {
        // event.preventDefault();
        localStorage.removeItem('accessToken')
        // console.log(localStorage.getItem('accessToken'))
    }

    componentDidMount(){
        const user = localStorage.getItem('accessToken')
        this.setState({
            user: user
        })
    }
    useEffect(){
       
    }

    showLoggedIn = () =>{
        // const user = null;

            return(
                <>
                    <Nav.Link className='text-success fw-bold' href='/profile'>Hello</Nav.Link>
                    <Nav.Link className='border-end me-1'></Nav.Link>
                    <Nav.Link onClick={() => this.signOut()}>Sign Out</Nav.Link>
                </>
            )
        
        // else{
        //     // console.log("User is not signed in!")
        //     return(
        //         <>
        //             <Nav.Link href="/login">Login</Nav.Link>
        //             <Nav.Link href="/register">Register</Nav.Link>
        //         </>
        //     )
        // }
    }

    showLoggedOut = () => {
        return(
            <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
            </>
        )
    }


    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" fixed="top">
                    <Container>
                        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <NavDropdown title="Others" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="profile-list">See other user</NavDropdown.Item>
                                <NavDropdown.Divider />
                                {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                                
                            </NavDropdown>
                            </Nav>
                            <Nav>
                                {this.state.user != null ? this.showLoggedIn() : this.showLoggedOut()}
                                {/* <Nav.Link onClick={() => firebase.auth().signOut()}>Sign out</Nav.Link>
    
                                <Nav.Link href="/login">Login</Nav.Link>
                                <Nav.Link href="/register">Register</Nav.Link> */}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        )
    }
    
}

export default connect(
    state => state,
    userAction
)(Navbars)