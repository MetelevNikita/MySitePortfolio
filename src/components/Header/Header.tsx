'use client'

import { FC, useEffect, useState } from 'react'
import Link from 'next/link'

//

import { Container, Col, Row } from 'react-bootstrap'

const Header:FC = () => {

  const [menu, setMenu] = useState<Boolean>(false)


  const menuArr = [
    {
      title: 'Портфолио',
      link: '/portfolio'
    },

    {
      title: 'О нас',
      link: '/about'
    },

    {
      title: 'Контакты',
      link: '/contacts'
    }
  ]





  return (

    <Container>

      <Row className='mb-3 mt-3'>

        <Col className='d-flex justify-content-start'>
          <div>LOGO</div>
        </Col>


        <Col className='d-flex justify-content-end'>
          <div onClick={() => setMenu(!menu)}>{(menu) ? 'CLOSE' : 'OPEN'}</div>
        </Col>

      </Row>


      <Row>
        {(menu) ? menuArr.map((item, index) => {
          return <Link key={index} href={item.link}>{item.title}</Link>
        }) : <></>}
      </Row>

    </Container>

  )
}

export default Header
