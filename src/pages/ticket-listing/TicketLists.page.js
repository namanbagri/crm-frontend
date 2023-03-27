import {useEffect, useState, React} from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'
import { SearchForm } from '../../components/breadcrumb/search-form/SearchForm.comp'
import { TicketTable } from '../../components/ticket-table/TicketTable.comp'
import tickets from '../../assets/data/dummy-tickets.json'
export const TicketLists = () => {
  const [str, setstr] = useState("")
  const [displayTicket, setdisplayTicket] = useState(tickets)
  useEffect(() => {
  }
  , [str, displayTicket])
  
  const handleOnChange = e =>{
    setstr(e.target.value)
    searchTicket(e.target.value)
  }
  const searchTicket = sttr =>{
    const displayTicket = tickets.filter(row=> row.subject.toLowerCase().
    includes(sttr.toLowerCase()))
    setdisplayTicket(displayTicket)
  }
  return (
    <Container>
        <Row>
            <Col>
                <PageBreadcrumb page='Ticket Lists' />
            </Col>
        </Row>
        <Row>
            <Col>
                <Button variant='info' className='mt-4'>Add New Ticket</Button>
            </Col>
            <Col className='text-right'>
                <SearchForm 
                    handleOnChange={handleOnChange}
                    str={str}
                />
            </Col>
        </Row>
        <hr />
        <Row>
            <Col>
                <TicketTable tickets={displayTicket}/>
            </Col>
        </Row>
    </Container>
  )
}
