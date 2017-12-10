// @flow
import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addAppointment } from '../actions/appointments.actions'


type State = {
  provider_id: string,
  date: string,
  time: string,
  modal: boolean,
  complaint: string
}

type Props = {
  providers: any[]
}

class ScheduleAppt extends Component<Props, State> {

  state = {
    provider_id: '',
    date: '',
    time: '',
    modal: false,
    complaint: ''
  }

  toggleModal = () => this.setState({modal: !this.state.modal})

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addAppointment(this.state)
  }

  render () {
    let providersOptions = this.props.providers.map(provider => <option key={provider.id} value={provider.id}>{provider.name}</option>)
    return (
      <Container>
        <Row>
          <Col className="text-center" style={{marginTop: 40}}>
            <h2>Speak with a physician now</h2>
            <Button onClick={this.toggleModal}>Click here</Button>
          </Col>
        </Row>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
        >
          <ModalHeader>Visit Details</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="cheifComplaint">What is your Cheif Complaint?</Label>
                <Input
                  type="text"
                  id="cheifComplaint"
                  placeholder="back hurts, nausea, etc."
                  value={this.state.complaint}
                  onChange={(e) => this.setState({complaint: e.target.value})}/>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleModal}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <Row>
          <Col className="text-center" style={{marginTop: 40}}>
            <h2>Schedule a future appointment</h2>
          </Col>
        </Row>
        <Row>
          <Col className="text-center" lg={{size: 4, offset: 4}}>
            <Form onSubmit={this.handleSubmit}>
              {/*Provider Select*/}
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="exampleSelect">Select a doctor: </Label>
                <Input
                  type="select"
                  id="exampleSelect"
                  value={this.state.doctor}
                  onChange={(e) => this.setState({provider_id: e.target.value})}
                >
                  <option>Select Your Physician</option>
                  {providersOptions}
                </Input>
              </FormGroup>
              {/*Appointment Date*/}
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="appt-date">Choose a Date</Label>
                <Input
                  type="date"
                  id="appt-date"
                  value={this.state.date}
                  onChange={(e) => this.setState({date: e.target.value})}
                />
              </FormGroup>
              {/*Appointment Time*/}
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="appt-time">Choose a Time</Label>
                <Input
                  type="time"
                  id="appt-time"
                  value={this.state.time}
                  onChange={(e) => this.setState({time: e.target.value})}
                />
              </FormGroup>
              <Button type="submit" style={{marginTop: 15}}>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return {
    addAppointment: bindActionCreators(addAppointment, dispatch),
  }
}

function mapStateToProps(state, props) {
  return {
    providers: state.providers
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleAppt)
