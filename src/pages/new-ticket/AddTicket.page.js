import {React,useState, useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AddTicketForm } from '../../components/add-ticket-form/AddTicketForm.comp'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'
import {shortText} from '../../utils/validation'

const initialFormData = {
    subject:'',
    issueDate:'',
    detail:'',
};
const initialFormError = {
    subject:false,
    issueDate:false,
    detail:false,
};
export const AddTicket = () => {

  const [formData, setformData] = useState(initialFormData);
  const [formDataError, setformDataError] = useState(initialFormError);
  useEffect(() => {}, [formData,formDataError]);
  

  const handleOnChange = e =>{
    const {name,value} = e.target;
    setformData({
        ...initialFormData,
        [name]:value
    });
  }

  const handleOnSubmit = async(e) =>{
    e.preventDefault();

    setformDataError(initialFormError)
    const isSubjectValid = await shortText(formData.subject)
    setformDataError({
        ...initialFormError,
        subject: !isSubjectValid,
    });
  };
  return (
    <Container>
        <Row>
            <Col>
                <PageBreadcrumb page='New Ticket'>

                </PageBreadcrumb>
            </Col>
        </Row>
        <Row>
            <Col>
                <AddTicketForm 
                formData={formData}
                handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit}
                formDataError={formDataError}
                />
            </Col>
        </Row>
    </Container>
  )
}
