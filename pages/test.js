import React from "react";
import { connect } from "react-redux";
import { Layout } from './components/layout'
import userAction from "../redux/action/userAction";
import privateAuth from "../Auth/privateAuth";
import { Button } from 'reactstrap';
import { Form, FormGroup, Label, Input, Container, Col} from 'reactstrap';
import axios from "axios";
class Test extends React.Component{
    constructor(props){
        super(props)
        this.state ={}
    }
    
    set = name => event => {
        // console.log(event.target.value)  
        this.setState({[name]: event.target.value});
    }

    async componentDidMount(){
        const config = {
            headers: {
                authorization: `${localStorage.getItem('accessToken')}`,
            },
        }
        axios.get(`https://fsw-challenge-ch10-api-dev.herokuapp.com/api/me`, config)
            .then(res => {
                console.log(res)
                this.setState({
                    data: res.data.currentUserInfo,
                    username: res.data.currentUserInfo.username,
                    description: res.data.currentUserInfo.description,
                    point: res.data.currentUserInfo.point,

                })
            })
    }

    useEffect(){
        
    }

    handleSubmit = async (event) => {
        // event.preventDefault();
        // const { email, password}  = this.state;
        // const loginData = {
        //     email,
        //     password
        // }
        // await this.props.loginUser(loginData)
        // console.log(this.props.user.user)
        // console.log(localStorage.getItem('accessToken'))
        // // console.log(this.props.user.user.accessToken)
    }

    render(){
        console.log(this.state.data)
        const { data } = this.state;
        return(
            <Layout title='Test'>
                <Col xs={8} sm={12} md={12} className="text-center pt-sm-5 pt-xl-5">
                    <h1>{this.state.username}</h1>
                    <h1>{this.state.point}</h1>
                    <h1>{this.state.description}</h1>
                </Col>
               {/* <Container>
                <h1>SIGN UP</h1>                       
               </Container> */}
            </Layout>
        )
    }
}

export default connect(
    state => state,
    userAction
)(privateAuth(Test))