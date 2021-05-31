import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Card, InputGroup } from 'react-bootstrap';
import { FaGooglePlus, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";
export default function RegisterForm() {

    const [validated, setValidated] = useState(false);
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [showPass, setShowPass] = useState('password')
    const [showcPass, setShowcPass] = useState('password')

    function handleSubmit(event) {

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            alert('OK')
        }

        setValidated(true);
    };




    let string = userName;
    let notStarting = RegExp(/^[a-zA-Z0-9](.*[a-zA-Z0-9])?$/).test(string);

    let string2 = userName
    let reg = RegExp(/^(?=[a-zA-Z0-9._]{3,30}$)(?!.*[_.]{2})[^_.].*[^_.]$/).test(string2)

    return (
        <div>
            <Container>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <Card style={{ boxShadow: '0 0 10px 0 rgba(100, 100, 100, 0.26)' }}>
                            <Card.Body>
                                <Form noValidate validated={validated} onSubmit={handleSubmit} >
                                    <Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter First Name" onChange={(e) => setFName(e.target.value)} required />
                                                <Form.Text style={{ color: 'red' }}>
                                                    {

                                                        fName.length === 0 ? null :
                                                            fName.length < 3 ? 'First name sholud contain atleast 3 characters' : null
                                                    }
                                                </Form.Text>
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    Please Enter First Name
                                        </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>

                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Last Name" onChange={(e) => setLName(e.target.value)} required />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    Please Enter Last Name
                                        </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Username</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Username" onChange={(e) => setUserName(e.target.value)} required maxLength="30" />
                                                <Form.Text style={{ color: 'red' }}>
                                                    {
                                                        userName.length === 0 ? null :
                                                            userName.length < 3 ? 'Username should have atleast 3 characters' :
                                                                notStarting === false ? 'Username should not be start and end with (.)' :
                                                                    reg === false ? 'Username cannot contain two or more than one Dots (.) in a row' :
                                                                        (userName.includes('.') || userName.includes('_')) === false ? 'Username should be include (.) or (_)' : null

                                                    }
                                                </Form.Text>
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    Please Enter Username
                                        </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>

                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} required />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    Please Enter Email
                                        </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <Form.Group>

                                                <Form.Label>Password</Form.Label>

                                                <InputGroup className="mb-3">
                                                    <Form.Control type={showPass} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} required />
                                                    <InputGroup.Text>
                                                        {
                                                            showPass === 'password' ?
                                                                <Button variant="link" size="sm" style={{ width: '0px', height: '0px', borderColor: '#e9ecef' }} onClick={() => setShowPass('text')}><FaEye style={{ marginTop: '-21px', marginLeft: '-6px', fontSize: '15px', color: 'grey' }} /></Button>
                                                                :
                                                                <Button variant="link" size="sm" style={{ width: '0px', height: '0px', borderColor: '#e9ecef' }} onClick={() => setShowPass('password')}><FaEyeSlash style={{ marginTop: '-21px', marginLeft: '-6px', fontSize: '15px', color: 'grey' }} /></Button>
                                                        }

                                                    </InputGroup.Text>
                                                </InputGroup>
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    Please Enter Password
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>

                                        <Col>
                                            <Form.Group>

                                                <Form.Label>Confirm Password</Form.Label>

                                                <InputGroup className="mb-3">
                                                    <Form.Control type={showcPass} placeholder="Enter Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} required />
                                                    <InputGroup.Text>
                                                        {
                                                            showcPass === 'password' ?
                                                                <Button variant="link" size="sm" style={{ width: '0px', height: '0px', borderColor: '#e9ecef' }} onClick={() => setShowcPass('text')}><FaEye style={{ marginTop: '-21px', marginLeft: '-6px', fontSize: '15px', color: 'grey' }} /></Button>
                                                                :
                                                                <Button variant="link" size="sm" style={{ width: '0px', height: '0px', borderColor: '#e9ecef' }} onClick={() => setShowcPass('password')}><FaEyeSlash style={{ marginTop: '-21px', marginLeft: '-6px', fontSize: '15px', color: 'grey' }} /></Button>
                                                        }

                                                    </InputGroup.Text>
                                                </InputGroup>
                                                
                                                    {
                                                        password.length === 0 ? null :
                                                        password === confirmPassword ? 
                                                        <Form.Text style={{color:'green'}}>
                                                            Matched
                                                        </Form.Text>
                                                         : 
                                                         <Form.Text style={{color:'red'}}>
                                                            Not Matched
                                                        </Form.Text>

                                                    }
                                                
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    Please Enter Confirm Password
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Button type="submit" className="mx-auto d-block" style={{ borderRadius: '0px', marginTop:'20px'}}>Login</Button>
                                    <Row style={{ marginTop: '20px' }}>
                                        <Col><Button type="submit" className="mx-auto d-block" style={{ width: '100%', background: 'white', borderRadius: '0px', color: 'black' }}>Login As Google <FaGooglePlus style={{ marginBottom: '5px' }} /></Button></Col>
                                        <Col><Button type="submit" className="mx-auto d-block" style={{ width: '100%', background: 'white', borderRadius: '0px', color: 'black' }}>Login As Facebook <FaFacebook style={{ marginBottom: '5px' }} /></Button></Col>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col md={2}></Col>
                </Row>
            </Container>
        </div>
    )
}
