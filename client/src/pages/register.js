import React from 'react'
import { Button, Form,Input, Typography } from "antd";

const Register = () =>{

  

  return (
<>
   <div className='form-container'>
    <form layout="vertical" onfinish={onfinishHandler}>
        <form.Item lable="Name" name="name">
          <Input type="text" required/>
          </form.Item>
          <form.Item lable="Email name="email">
          <Input type="email" required/>
          </form.Item>
          <form.Item lable="password" name="password">
          <Input type="password" required/>
          </form.Item>
          <Button className='btn btn-primary' type='submite'>Register</Button>

     </form>
     </div>
          
      )  



   
   
   
   </div>
</>