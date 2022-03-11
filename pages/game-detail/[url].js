import React, { Component } from "react"
import { useRouter } from "next/router";
import { Layout } from '../components/layout';
import { LoadingAnimation } from '../components/loadingAnimation_1'

import { Container, Row, Col} from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../../styles/GameDetail.module.css'

const GameDetail = () => {
    const router = useRouter()
    const { url } = router.query

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