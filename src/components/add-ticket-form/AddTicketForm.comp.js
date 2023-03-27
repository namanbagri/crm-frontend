import React from 'react'
import { Form, Button, Row, Col} from 'react-bootstrap'
import {PropTypes} from 'prop-types'
import "./add-ticket-form.style.css";

export const AddTicketForm = ({handleOnChange, handleOnSubmit, formData, formDataError}) => {
  return (
    <div className='form-box mt-3 p-5 add-new-ticket bg-light rounded'>
        <h1 className='text-info text-center' style={{display:'block'}}>Add New Ticket</h1>
        <hr />
        <Form autoComplete='off' onSubmit={handleOnSubmit}>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Subject</Form.Label>
                        <Col sm={9}>
                            <Form.Control
                            name='subject'
                            // value={formData.subject}
                            placeholder='Subject'
                            onChange={handleOnChange}
                            required
                            className='mb-2'
                            />
                            <Form.Text className=''>{formDataError.subject && "Subject is required"}</Form.Text>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Issue Date</Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                type='date'
                                name='issueDate'
                                // value={formData.issueDate}
                                placeholder='Issues Date'
                                onChange={handleOnChange}
                                required
                                className='mb-2'
                                />
                            </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Details</Form.Label>
                        <Col sm={9}>
                            <Form.Control
                            as='textarea'
                            name='detail'
                            rows='5'
                            // value={formData.detail}
                            onChange={handleOnChange}
                            required
                            className='mb-2'
                            />
                        </Col>
                    </Form.Group>
                    <Button type='submit' variant='info' block="true" onClick={handleOnSubmit}>Login</Button>
                </Form>
    </div>
  )
}

AddTicketForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formData: PropTypes.object.isRequired,
    formDataError: PropTypes.object.isRequired
}