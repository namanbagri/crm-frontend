import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { TicketTable } from '../../components/ticket-table/TicketTable.comp'
import tickets from "../../assets/data/dummy-tickets.json"
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'

export const Dashboard = () => {
  return (
    <Container>
        <Row>
            <Col>
                <PageBreadcrumb page="Dashboard" />
            </Col>
        </Row>
        <Row>
            <Col className='text-center mt-5 mb-2'>
                <Button variant='info' style={{fontSize: '2rem', padding:'10px 30px'}}>
                    Add New Ticket
                </Button>
            </Col>
        </Row>
        <Row>
            <Col className='text-center mt-5 mb-2'>
                <div>Total ticket: 50</div>
                <div>Pending Ticket: 5</div>
            </Col>
        </Row>
        <Row>
            <Col className='text-center mt-5 mb-2'>
                Recently added tickets
            </Col>
        </Row>
        <Row>
            <Col className='recent-ticket'>
                <TicketTable tickets={tickets}></TicketTable>
            </Col>
        </Row>
    </Container>
  )
}
