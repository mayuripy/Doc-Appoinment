import React from 'react'
import { Form,Input } from "antd";

const Register = () => {

  const onfinishHandlar = (values) => {
    console.log(values)
  };

  return (
    <>
       <div className='form-container'>
        <h1>registration form</h1>
        <Form layout="vertical" onfinish={onfinishHandlar}>
           <Form.item label="Name" name="name">
              <Input type="text" required />
            </Form.item>
            <Form.item label="Email" name="email">
              <Input type="email" required />
            </Form.item>
            <Form.item label="password" name="password">
              <Input type="password" required />
            </Form.item>
       <button className='btw btn-primary' type="submit">Register</button>
        </Form>
       </div>
    </>
  );
};

export default Register;
