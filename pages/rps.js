import React, { useState, useEffect } from 'react'
import styles from '../styles/rps.module.css'

import { Row, Col } from 'reactstrap'

//icon
import Paper from '../public/images/icon-paper.svg'
import Rock from '../public/images/icon-rock.svg'
import Scissors from '../public/images/icon-scissors.svg'
import Refresh from '../public/images/refresh.png'
import { Layout } from './components/layout'

const RPS = () => {
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState(null)
  const [indexResult, setIndexResult] = useState(null)
  const [stringResult, setStringResult] = useState([])
  const [numofWinUser, setnumofWinUser] = useState(0)
  const [numofWinComp, setnumofWinComp] = useState(0)

  const choices = [
    {
      name: 'rock',
      border: 'blue',
      icon: Rock,
    },
    {
      name: 'scissors',
      border: 'red',
      icon: Scissors,
    },
    {
      name: 'paper',
      border: 'yellow',
      icon: Paper,
    },
  ]

  const handleClick = (value) => {
    console.log('Handling Click!')
    setUserChoice(value)
    generateComputerChoice()
  }

  const generateComputerChoice = () => {
    console.log("Generating computer choices")
    const randomChoice = choices[Math.floor(Math.random() * choices.length)].name
    setComputerChoice(randomChoice)
  }

  useEffect(() => {
    checkResult()
  }, [userChoice, computerChoice])

  const checkResult = () => {
    switch (userChoice + computerChoice) {
      case 'scissorspaper':
      case 'rockscissors':
      case 'paperrock':
        setResult('YOU WIN!')
        setnumofWinUser( + 1)
        setStringResult((old) => [...old, 'win'])
        break
      case 'paperscissors':
      case 'scissorsrock':
      case 'rockpaper':
        setResult('YOU LOSE!')
        setnumofWinComp( + 1)
        setStringResult((old) => [...old, 'lose'])
        break
      case 'rockrock':
      case 'paperpaper':
      case 'scissorsscissors':
        setResult(`IT'S A DRAW!`)
        setStringResult((old) => [...old, 'draw'])
        break
    }
    const indexOfResult = choices.findIndex((i) => i.name == computerChoice)
    setIndexResult(indexOfResult)
  }

  useEffect(() => {
    if (stringResult.length == 3) {
      console.log(stringResult)
      checkFinalResult()
    }
  }, [stringResult])

  const checkFinalResult = () => {
    const counts = {}
    stringResult.forEach(function (x) {
      console.log(x)
      counts[x] = (counts[x] || 0) + 1
    })

    if(numofWinUser == numofWinComp){
      console.log('draw')
    }else if(numofWinUser > numofWinComp){
      console.log('win bro')
    }else if(numofWinUser < numofWinComp){
      console.log('kamu kalah ')
    }

    // if (counts.win >= 2) {
    //   console.log('win bro')
    // } else if (counts.lose >= 2) {
    //   console.log('kamu kalah ')
    // } else {
    //   console.log('draw')
    // }
  }

  const reset = () => {
    setComputerChoice(null)
    setUserChoice(null)
    setResult(null)
    setIndexResult(null)
    console.log('reset')
  }

  return (
    <Layout title='Rock-Paper-Scissor'> 
    <div className={`${styles.playgame} nt-5 pt-5`}>
      <div className="pt-3">
      <div className={`${styles.cardinfo} d-flex justify-content-between`}>
          <h3>Rock Paper Scissors</h3>
          Final Result : {stringResult} 
          <button className={`${styles.btnrules} `}>Rules</button>
          <div className="text-center card-score d-flex justify-content-center align-items-center">
            <h5 style={{ marginRight: '10px' }}>Score</h5>
            <h3 className="font-weight-bold" style={{ fontSize: '40px' }}>
              2
            </h3>
          </div>
        </div>

        <div className={styles.playgame}>
          <Row cols="12">
            <Col cols="4">
              {choices.map((choice) => (
                <div className="mt-4" key={choice.name}>
                  <div
                    className={`${styles.btngame} d-flex justify-content-center align-items-center`}
                    style={{ border: `10px solid ${choice.border}` }}
                    onClick={() => {
                      handleClick(choice.name)
                    }}
                  >
                    <img src={choice.icon} alt="halo" />
                  </div>
                </div>
              ))}
            </Col>
            <Col cols="4" className="d-flex justify-content-center align-items-center">
              <div className="text-center mt-5">
                {computerChoice && (
                  <div className="bg-success py-2 px-3" style={{ borderRadius: '10px' }}>
                    <h2 style={{ color: 'white' }}>{result}</h2>
                  </div>
                )}
                <div style={{ marginTop: '50px' }} className="reset" onClick={reset}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="white" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                  </svg>
                </div>
              </div>
            </Col>
            <Col cols="4" className="d-flex justify-content-end align-items-center">
              <div className="mt-4">
                <div className={`${styles.btngame} d-flex justify-content-center align-items-center btn-game-computer`} style={{ border: `10px solid green` }}>
                  {computerChoice ? <img src={choices[indexResult]?.icon} alt="halo" /> : <div>Loading...</div>}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
    </Layout>

    
  )
}

export default RPS
