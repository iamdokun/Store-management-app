import React from 'react'
import {Form, Button} from 'react-bootstrap';
import '../style/style.css'


const Login = () => {

    return (
      <div className="container form-wrap">
        <Form>
          <h2 className="text-center mb-4">Staff Login</h2>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" name="userid" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="pswrd" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
}

export default Login
