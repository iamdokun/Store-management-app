import React, { useState } from 'react'
import PropTypes from 'prop-types';
import {Form, Button} from 'react-bootstrap';
import '../style/style.css'


async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

const Login = ({ setToken }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

    return (
      <div className="container form-wrap">
        <Form onSubmit={handleSubmit}>
          <h2 className="text-center mb-4">Staff Login</h2>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" name="userid" onChange={e => setUserName(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="pswrd" onChange={e => setPassword(e.target.value)} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
export default Login
