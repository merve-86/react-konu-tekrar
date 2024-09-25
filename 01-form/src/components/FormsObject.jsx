import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function FormsObject() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = data; 

  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   

    alert(`
      username: ${username}
      email: ${email}
      password: ${password}     
      `);

      setData({
        username: "",
        email: "",
        password: ""
      });
  };

  return (
    <Form className="container" onSubmit={handleSubmit}>
      <h1 className="text-center mt-5">Forms Object</h1>
      <Form.Group className="mb-3">
        <Form.Label>{username && <span>Hello {username}</span>}</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          id="username"
          name="username"
          value={username}
          onChange={handleData}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>{email && <span>Email: {email}</span>}</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          id="email"
          name="email"
          value={email}
          onChange={handleData}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          value={password}
          onChange={handleData}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormsObject;
