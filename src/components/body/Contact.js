import React, {Component} from "react";
import {Button, Col, FormGroup, Label} from "reactstrap";
import {Form, Control, Errors, actions, LocalForm} from "react-redux-form";
import { connect } from "react-redux";


const mapDispatchToProps = dispatch => {
    return {
        resetFeedbackForm: () => {
            dispatch(actions.reset('feedback'))
        }
    }
}

const required = val => val && val.length;
const isNumber = val => !isNaN(Number(val));
 const validEmail = val => /.+@.+\.[A-Za-z]+$/.test(val);

// const validateEmail = (mail) => {
//     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
//     {
//         return true
//     }
//     alert("You are writing invalid email address!")
//     return false
// }


class Contact extends Component {

    handleSubmit = values => {
        // console.log(values);
        this.props.resetFeedbackForm();
    }

    render() {
        document.title = "Contact";
        return (
            <div className="container">
                <div className="row row-content" style={{paddingLeft: "20px", textAlign: "left"}}>
                    <div className="col-12">
                        <h3> Send us your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-7">
                        <Form model='feedback' onSubmit={values => this.handleSubmit(values)}>
                            <FormGroup row>
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".firstname"
                                        name="firstname"
                                        placeholder="First name"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    />
                                    < Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={
                                            {
                                                required: "Required"
                                            }
                                        }
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastName" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".lastname"
                                        name="lastname"
                                        placeholder="LastName"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    />

                                    < Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={
                                            {
                                                required: "Required"
                                            }
                                        }
                                    />

                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".telnum"
                                        name="telnum"
                                        placeholder="Tel. Number"
                                        className="form-control"
                                        validators={{
                                            required,
                                            isNumber
                                        }}
                                    />

                                    < Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={
                                            {
                                                required: "Required, ",
                                                isNumber: "Invalid Number!"
                                            }
                                        }
                                    />

                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".email"
                                        name="email"
                                        placeholder="Email Address"
                                        className="form-control"

                                        validators={{
                                            required,
                                            validEmail
                                        }}
                                    />

                                    < Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={
                                            {
                                                required: "Required"
                                            }
                                        }
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 6, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Control.checkbox
                                                model=".agree"
                                                name="agree"
                                                className="form-check-input"
                                            />
                                            <strong>May we contact you ? </strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size: 3, offset: 2}}>
                                    <Control.select
                                        className="form-control"
                                        model=".contactType"
                                        name="contactType">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}> Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea
                                        name="message"
                                        model=".message"
                                        rows="12"
                                        className="form-control">
                                        validators={{
                                        required
                                    }}
                                    </Control.textarea>
                                    < Errors
                                        className="text-danger"
                                        model=".message"
                                        show="touched"
                                        messages={
                                            {
                                                required: "Required"
                                            }
                                        }
                                    />
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

export default connect(null, mapDispatchToProps)(Contact);
