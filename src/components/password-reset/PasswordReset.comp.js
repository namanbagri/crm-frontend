import React from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import {PropTypes} from "prop-types"
export const ResetPassword = ({handleOnChange,email,handleResetOnSubmit,formSwitcher}) => {

  return (
    <Container>
        <Row>
            <Col>
                <h1 className='text-info text-centre'>Reset Password</h1>
                <hr />
                <Form onSubmit={handleResetOnSubmit}>
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
                    <Button type='submit'>Reset Password</Button>
                </Form>
                <hr />
            </Col>
        </Row>
        <Row>
            <Col>
                <a href='#1' onClick={()=>formSwitcher('login')}>Login Now</a>
            </Col>
        </Row>
    </Container>
  )
}
ResetPassword.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    email: PropTypes.string,
    handleResetOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,

}