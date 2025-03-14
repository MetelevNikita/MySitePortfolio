import { FC } from 'react'

//

import { Container, Row, Col } from 'react-bootstrap'

// components

import Form from '@/components/Form/Form'

const Login: FC = () => {
  return (

    <Container>

      <Row style={{ minHeight: '100vh' }}>

        <Col className="d-flex justify-content-center align-items-center">
          <Form />
        </Col>

      </Row>

    </Container>

  )
}

export default Login

