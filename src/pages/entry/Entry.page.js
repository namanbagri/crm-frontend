import React,{useState} from 'react'
import './entry.style.css';
import {LoginForm} from '../../components/login/login.comp'
import { ResetPassword } from '../../components/password-reset/PasswordReset.comp';

export const Entry = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [formLoad, setFormLoad] = useState('login');

const handleOnChange = e =>{
      const {name,value} = e.target
      switch(name){
        case 'email':
          setemail(value)
          break;

        case 'password':
          setpassword(value)
          break;
        
        default:
          break;
      }
      console.log(name,value)
  }
const handleOnSubmit = e =>{
  e.preventDefault()
  //TODO: call api for login
  
}
const handleResetOnSubmit = e =>{
  e.preventDefault()
  //TODO: call api for login
  
}
const formSwitcher = formType =>{
  setFormLoad(formType);
}

  return (
    <div className='entry-page bg-info'>
      <div className='form-box mt-4 p-5 bg-white text-black rounded'>
        {formLoad ==='login' && <LoginForm 
        handleOnChange={handleOnChange}
        email={email}
        pass={password}
        formSwitcher={formSwitcher}
        handleOnSubmit={handleOnSubmit}
        />}
        {formLoad === 'reset'&&<ResetPassword 
        handleOnChange={handleOnChange}
        email={email}
        formSwitcher={formSwitcher}
        handleResetOnSubmit={handleResetOnSubmit}
        />}
      </div>
    </div>
  )
}
