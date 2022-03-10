import { useRouter } from "next/router";

import React, { Component } from "react"

import LoadingAnimation from '../components/loadingAnimation_1'

export default class GameDetail extends Component {
    constructor (props) {
        super(props)
        this.state = {
            name: null,
            imageLink: null,
            gameLink: null,
            description: null,
            isLoading: true
        }
    }

    componentDidMount () {
        const router = useRouter()
        const { url } = router.query
        this.setState({
            name: url,
            isLoading: false
        })
    }

    get LoadingContent () {
        return(
          <>
            <br />
            <br />
            <br />
            <LoadingAnimation />
          </>
        )
    }

    get Content () {
        return(
            <>
                <h1>Content</h1>
            </>
        )
    }

    render () {
        return(
            <>
                {this.state.isLoading ? this.LoadingContent : this.Content}
            </>
        )
    }
}