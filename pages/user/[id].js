import React, { Component, useEffect, useState } from 'react'
import { Card, Col, Row, Container, Form, Button, Modal } from 'react-bootstrap'
import { Layout } from '../components/layout'
import { useRouter } from 'next/router'
import style from '../../styles/Profile.module.css'
import Image from 'next/image'

import axios from 'axios'

function DetailUser() {
  const router = useRouter()
  const { id } = router.query
  const [handleShow, setHandleShow] = useState(false)
  const [handleSubmit, setHandleSubmit] = useState(false)
  const [data, setData] = useState('')

  useEffect(() => {
    axios.get(`https://fsw-challenge-ch10-api-dev.herokuapp.com/api/user/${id}`).then((res) => {
      console.log(res.data.data)
      setData(res.data.data)
    })
  }, [])

  return (
    <div className="profile-user">
      <Layout title="Profile">
        <div className={style.container}>
          <div className={style.card}>
            <div className={style.upper}>
              <Card.Img variant="top" style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={data.imageLink} alt="game" />
            </div>
            <div className="mt-4 text-center">
              <h4 className="mb-0">{data.username}</h4>
              <button className={`btn btn-primary btn-sm mt-2 ${style.follow}`}>{data.email}</button>
              <p className="my-2">{data.description}</p>
              <div className="d-flex justify-content-between align-items-center mt-5 px-4">
                <div className={style.stats}>
                  <h6 className="mb-0">Game Played</h6> {data.Details && <span>{data.Details.length}</span>}
                </div>
                <div className={style.stats}>
                  <h6 className="mb-0">Point</h6>
                  <span>
                    {data.point == null && '0'} {data.point != null && data.point}{' '}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default DetailUser
