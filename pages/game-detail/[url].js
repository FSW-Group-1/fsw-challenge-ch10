import React, { Component, useEffect, useState } from "react"
import { useRouter } from "next/router";
import { Layout } from '../components/layout';
import { LoadingAnimation } from '../components/loadingAnimation_1'

import { Container, Row, Col} from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../../styles/GameDetail.module.css'

import axios from 'axios'



const GameDetail = () => {
    const router = useRouter()
    const { url } = router.query
    let gameUrl = 'https://fsw-challenge-ch10-api-dev.herokuapp.com/api/gamedetail/1'
    // gameUrl = gameUrl + url

    const [data, setData] = useState()

    useEffect(() => {
        try {
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
      
          } catch (error) {
            console.log(error)
            this.setState({
              isLoading: false
            })
          }
    })

    return(
        <>
            <Layout>
                    <Container className={styles.header} fluid>
                        <div className='pt-3 pb-3'>
                            <Container>
                                <h1>lalala</h1>
                            </Container>
                        </div>
                    </Container>
            </Layout>
        </>
    )
}

export default GameDetail