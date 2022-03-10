import React, {useEffect, useState} from "react";
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
        this.state ={
            data: {}
        }
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
        axios.get(`https://fsw-challenge-ch10-api-dev.herokuapp.com/api/users`)
            .then(res => {
                console.log(res)
                this.setState({
                    data: res.data.data

                })
            })
    }

    useEffect(){
        
    }

    handleSubmit = async (event) => {
        
    }

    render(){
        console.log(this.state.data)
        const { data } = this.state;
        return(
            <Layout title='Test'>
                <br />
                <br />
                {Object.keys(data).map(function(name, index){
                    return(
                        <div>
                            <h1>{index}. {data[name].username} → {data[name].id}</h1>
                        </div>
                    )
                })}
                {/* <Col xs={8} sm={12} md={12} className="text-center pt-sm-5 pt-xl-5">
                    <h1>{this.state.username}</h1>
                    <h1>{this.state.point}</h1>
                    <h1>{this.state.description}</h1>
                </Col> */}
            </Layout>
        )
    }
}


// const Test = (props) => {
//     const [data, setData] = useState({})

//     useEffect(() => {
//         axios.get(`https://fsw-challenge-ch10-api-dev.herokuapp.com/api/users`)
//                     .then(res => {
//                         console.log(res)
//                         setData(res.data.data)
//                     })
//     }, [])

//     console.log(data)

//     return(
//         <div>
//             {Object.keys(data).map(function(name, index){
//                     return(
//                         <div key={index}>
//                             <h1>{index}. {data[name].username} → {data[name].id}</h1>
//                         </div>
//                     )
//                 })}
//         </div>
//     )
// }
export default connect(
    state => state,
    userAction
)(privateAuth(Test))