import React, { Component } from 'react'
import styles from "../styles/Index.module.css"
import axios from 'axios';

import { Container, Row, Col} from 'react-bootstrap'
import Image from 'next/image'

import { Layout } from './components/layout'
import { LoadingAnimation } from './components/loadingAnimation_1'

class GameCard extends Component {
  render () {
    const { item } = this.props
    
    let imagePath_ = "/../public/assets/game-card-img/"
    if(!item.imageLink) {
        item.imageLink = "rock-paper-scissor.jpg"
    }    
    imagePath_ = imagePath_ + item.imageLink

    return (
      <>
        <button className='text-center p-0 border-0'>
            <Image
              alt="Game thumbnail"
              src={imagePath_}
              width={300}
              height={150}
              objectFit="fit"
              quality={100}
            />
        </button>
        <br />
        <span style={ { color: 'yellow', fontSize:'100%' } }>{item.name}</span>
        <br />
        <span style={ { color: 'white', fontSize:'100%' } }>{item.description}</span>
      </>
    )
  }
}

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameList: [],
      isLoading: true
    }
  }

  componentDidMount () {
    this.getGameList()
  }

  async getGameList () {
    try {
      // const list = [
      //   {
      //     description: "Permainan Batu Gunting Kertas",
      //     imageLink: "rock-paper-scissor.jpg",
      //     name: "Rock Papper Scissor",
      //     route: "rps"
      //   },
      //   {
      //     description: "Permainan Ular Tangga",
      //     imgaeLink: "ladder-and-snake.jpg",
      //     name: "Ladder and Snake",
      //     route: "lns"
      //   },
      //   {
      //     description: "Permainan Congklak",
      //     imageLink: "conglak.jpg",
      //     name: "Congklak",
      //     route: "congklak"
      //   },
      //   {
      //     description: "Permaianan Karambol",
      //     imageLink: "carambol.jpg",
      //     name: "Karambol",
      //     route: "karambol"
      //   }
      // ]

      const config = {
        headers: {
            authorization: `${localStorage.getItem('accessToken')}`,
        },
      }
      axios.get(`https://fsw-challenge-ch10-api-dev.herokuapp.com/api/allgame`, config)
        .then(res => {
          this.setState({
            gameList: res.data.data,
            isLoading: false
          })
        })

      // this.setState({
      //   gameList: list,
      //   isLoading: false
      // })

    } catch (error) {
      console.log(error)
      this.setState({
        isLoading: false
      })
    }
  }

  get LoadingGameList () {
    return(
      <>
        <br />
        <br />
        <br />
        <LoadingAnimation />
      </>
    )
  }

  get contentGameList () {
    const gameList = this.state.gameList
    const games = () => {
      return (
        <>
          <Row className='justify-content-center mt-3'>
            {gameList.map((item, index) => {
              return(
                <Col className='col-md-3 col-6 mb-5' key={index}>
                  <GameCard item={item} />
                </Col>
              )
            })}
          </Row>
        </>
      )
    }
    const noGames = () => {
      return(
        <>
          <h2>No Data</h2>
        </>
      )
    }
    return(
      <>
        { this.state.gameList.length ? games() : noGames() }
      </>
    )
  }

  render () {
    return (
      <Layout title="Home">
        <div className='bg-black pt-5 pb-5'>
          <Container className={styles.header} fluid>
              <Container className='pt-5 pt-md-2 pt-lg-5'>
                <Row className="justify-content-center mt-xxl-3">
                    <Col xs={12} sm={12} md={8} className="text-center">
                        <h1>PLAY TRADISIONAL GAME</h1>
                        <p className="body" style={ { fontWeight: 'bold' } }>Experience new traditional game play</p>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} sm={12} md={12} className="text-center">
                        <a href="#game-list" className="btn main-button btn-warning mt-3" id='text-main-button'  style={
                            {
                                whiteSpace: 'nowrap',
                                fontWeight: 'bold'
                            }
                        }>
                            PLAY NOW  
                        </a>
                    </Col>
                </Row>
              </Container>
          </Container>
          <br />
          <Container id='game-list' className='pt-5 pt-sm-1' fluid>
            <div className={styles.gameList}>
              <Container className="mt-5">
                  <Row className='justify-content-center'>
                      <Col className='text-center'>
                          <h1>GAMES</h1>
                      </Col>
                  </Row>
              </Container>
              <Container>
                { this.state.isLoading ?  this.LoadingGameList : this.contentGameList}
              </Container>
            </div>
            <Container>
              <Row className='justify-content-center mt-3'>
                
              </Row>
            </Container>

          </Container>
        </div>
      </Layout>

    )
  } 
}