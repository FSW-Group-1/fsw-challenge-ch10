import React, { Component } from 'react'
// import styles from '../styles/Home.module.css'
// import styles from '../styles/Index.module.css'
import styles from "../styles/Index.module.css"

import { Container, Row, Col, Image } from 'react-bootstrap'

import { Layout } from './components/layout'
import { LoadingAnimation } from './components/loadingAnimation_1'

class GameCard extends Component {
  render () {
    const { item } = this.props
    // const imagePath = '../public/assets/game-card-img/rock-paper-scissor.jpg'
    const imagePath = './rock-paper-scissor.jpg'
    const image = require('./rock-paper-scissor.jpg')
    return (
      <>
        <button className='text-center p-0 border-0'>
            <Image style={
                {
                    resize:'cover',

                    width: '100%',
                }
            } src='./rock-paper-scissor.jpg' className='img-thumbnail'/>
        </button>
        <br />
        <span className='game-list-name'>{item.name}</span>
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
      const list = [
        {
          description: "Permainan Batu Gunting Kertas",
          imageFileName: "batu-gunting-kertas.jpg",
          name: "Rock Papper Scissor",
          route: "rps"
        },
        {
          description: "Permainan Ular Tangga",
          imgaeFileName: "ladder-and-snake.jpg",
          name: "Ladder and Snake",
          route: "lns"
        }
      ]
      this.setState({
        gameList: list,
        isLoading: false
      })
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