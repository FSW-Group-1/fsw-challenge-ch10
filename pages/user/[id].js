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
  const [img, setimg] = useState(`https://i.picsum.photos/id/305/200/300.jpg?hmac=qqxVDT5GPIxyVNSo9Y_9u_qZSwXU4Cy94gp7VAMVRIw`)

  useEffect(() => {
    axios.get(`https://fsw-challenge-ch10-api-dev.herokuapp.com/api/user/${id}`).then((res) => {
      console.log(res)
    })
  }, [])

  return (
    <div className="profile-user">
      <Layout title="Profile">
        <div className={style.container}>
          <div className={style.card}>
            <div className={style.upper}>
              <Image src={img} width="100%" height="100%" className="img-fluid" />
            </div>
            <div className={style.user}>
              <div className={style.profile}>{/* <img src="https://i.imgur.com/JgYD2nQ.jpg" className="rounded-circle" width="80">  */}</div>
            </div>
            <div className="mt-5 text-center">
              <h4 className="mb-0">Benjamin Tims</h4> <span className="text-muted d-block mb-2">Los Angles</span>{' '}
              <button className={`btn btn-primary btn-sm ${style.follow}`}>Follow</button>
              <div className="d-flex justify-content-between align-items-center mt-4 px-4">
                <div className={style.stats}>
                  <h6 className="mb-0">Followers</h6> <span>8,797</span>
                </div>
                <div className={style.stats}>
                  <h6 className="mb-0">Projects</h6> <span>142</span>
                </div>
                <div className={style.stats}>
                  <h6 className="mb-0">Ranks</h6> <span>129</span>
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
