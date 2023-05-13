import React from 'react'
import { Form,Input, Typography } from "antd";

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
          <Input type="password" name="name"/>
          </form.Item>
          <form.Item lable="Name" name="name">
          <Input type="text" name="name"/>
          </form.Item>

     </form>
          
        



   
   
   
   </div>
</>