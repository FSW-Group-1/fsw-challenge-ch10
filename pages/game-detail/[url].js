import React, { Component } from "react"
import { useRouter } from "next/router";
import { Layout } from '../components/layout';
import { LoadingAnimation } from '../components/loadingAnimation_1'

import { Container, Row, Col} from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'


const GameDetail = () => {
    const router = useRouter()
    const { url } = router.query

    return(
        <>
            <Layout>
                <p>Post: {url} </p>
            </Layout>
        </>
    )
}

export default GameDetail