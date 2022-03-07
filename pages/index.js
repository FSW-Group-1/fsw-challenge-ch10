import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import styles from '../styles/Index.module.css'
import styles from "../styles/Index.module.css"

import { Container, Row, Col } from 'react-bootstrap'

import { Layout } from './components/layout'

export default function Home() {
  return (
    <Layout title="Home">
      <div className='pt-5 pb-5'>
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
      </div>
    </Layout>

  )
}
