import React, {Component} from "react";
import {Button, Form, FormGroup, Label, Input, Col} from "reactstrap";


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            telnum: "",
            email: "",
            agree: false,
            contactType: 'Tel.',
            message: ""
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                        <h3> Send us your Feedback</h3>
                    </div>
                    <div className="col-12">
                        <Form>
                            <FormGroup row>
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" name="firstname" placeholder="First name"
                                           value={this.state.firstname}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastName" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" name="lastname" value={this.state.lastname}
                                           placeholder="LastName"/>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type="text" name="telnum" value={this.state.telnum}
                                           placeholder="Tel. Number"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="text" name="email" value={this.state.email}
                                           placeholder="Email Address"/>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{size: 6, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree" checked={this.state.agree}/>
                                            <strong>May we contact you</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Input type="select" name="contactType" value={this.state.contactType}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}> Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="text" name="message" value={this.state.message} rows="12"></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{size: 12, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
