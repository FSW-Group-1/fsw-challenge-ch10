import Head from 'next/head'
import Image from 'next/image'
import React, { Component, useEffect, useState } from 'react'
// import styles from '../styles/Home.module.css'
// import styles from '../styles/Index.module.css'
import styles from "../styles/Index.module.css"

import { Container, Row, Col } from 'react-bootstrap'

import { Layout } from './components/layout'
import { LoadingAnimation } from './components/loadingAnimation_1'

class GameCard extends Component {
  render () {
    return (
      <>
        <h1>ladida</h1>
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
    const games = () => {
      return (
        <>
          <h2>Data</h2>
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
    console.log(this.state.gameList)
    return (
      <Layout title="Home">
        <div className='bg-black pt-5 pb-5'>
          <Container className={styles.header} fluid>
              <Container className='pt-5 pt-md-2 pt-lg-5'>
                <Row className="justify-content-center mt-xxl-3">
                    <Col xs={12} sm={12} md={8} className="text-center">
                        <h1>PLAY TRADISIONAL GAME</h1>
                        <p className="body" style={ { fontWeight: 'bold' } }>Exprience new traditional game play</p>
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