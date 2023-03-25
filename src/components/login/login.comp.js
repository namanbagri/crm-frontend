import React from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import {PropTypes} from "prop-types"
export const LoginForm = ({handleOnChange,email,pass,handleOnSubmit,formSwitcher}) => {

  return (
    <Container>
        <Row>
            <Col>
                <h1 className='text-info text-centre'>Client Login</h1>
                <hr />
                <Form onSubmit={handleOnSubmit}>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleOnChange}
                        placeholder='Enter Email'
                        required
                        className='mb-2'
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                        type='password'
                        name='password'
                        value={pass}
                        onChange={handleOnChange}
                        placeholder='Enter Password'
                        required
                        className='mb-2'
                        />
                    </Form.Group>
                    <Button type='submit'>Login</Button>
                </Form>
                <hr />
            </Col>
        </Row>
        <Row>
            <Col>
                <a href='#1' onClick={()=>formSwitcher('reset')}>Forgot Password</a>
            </Col>
        </Row>
    </Container>
  )
}
LoginForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    email: PropTypes.string,
    pass: PropTypes.string,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired
}