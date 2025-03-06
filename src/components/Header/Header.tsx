'use client'

import { FC, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

//

import { Container, Row, Col } from 'react-bootstrap'

//

import Logo from '@/asset/Header/logo.svg'
import menuOpen from '@/asset/Header/menu_open.svg'
import menuClose from '@/asset/Header/menu_close.svg'

// types

import { menuType } from '@/types/menuType'


const Header: FC = () => {



  const menuList: menuType[] = [
    {
      id: 1,
      link: '/about',
      title: 'о нас'
    },

    {
      id: 2,
      link: '/portfolio',
      title: 'работы'
    },

    {
      id: 3,
      link: '/subscribe',
      title: 'подписывайтесь'
    },

    {
      id: 4,
      link: '/about',
      title: 'About'
    }
  ]


  const [menu, setMenu] = useState<Boolean>(false)


  return (

    <Container>
      <Row className='d-flex flex-row align-items-center' style={{ height: '100px' }}>


        <Col className='d-flex justify-content-start'>
          <Image src={Logo} alt='logo' width={50} height={50}></Image>
        </Col>


        <Col className='d-flex justify-content-end'  onClick={() => setMenu(!menu)}>{(!menu) ? <Image src={menuOpen} alt='menu' width={30} height={30}></Image> : <Image src={menuClose} alt='menu' width={20} height={20}></Image>}</Col>



      </Row>


      <Row>

        <Col>{menuList.map((item) => {
          return <Col key={item.id} className='d-flex justify-content-center'><Link href={item.link}>{item.title}</Link></Col>
        })}</Col>

      </Row>
    </Container>

  )
}
export default Header
