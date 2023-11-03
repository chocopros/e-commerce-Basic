import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'



const Login = () => {

  const {register, handleSubmit, reset} = useForm();

  const submit = data => {

    //console.log(data)
    const URL = `https://e-commerce-api-v2.academlo.tech/api/v1/users/login`

    axios.post(URL, data)
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.token)
      })
      .catch(err => console.log(err))


    reset({
      email: '',
      password: ''
    })
  }

  return (
    <MainLogin>
      <FormLogin>
        <h1>Welcome! Enter your email and password to continue</h1>

        <TestData>
          <h2>Test Data</h2>
          <p><span><i className="fa-regular fa-envelope fa-shake" ></i></span>john@gmail.com</p>
          <p><span><i className="fa-solid fa-lock fa-beat"></i></span>john1234</p>
        </TestData>

        <FormData onSubmit={handleSubmit(submit)}>
          <div>
            <h3>Email</h3>

            <input 
              {...register('email')} 
              type="email" 
              id='email'
            />

          </div>
          <div>
            <h3>Password</h3>

            <input 
              {...register('password')}
              type="password"
              id='password' 
            />

          </div>

          <button>Login</button>
        </FormData>

        <span>
          Don't have an account? <a href="">Sign up</a>
        </span>

      </FormLogin>

    </MainLogin>
  )
}

export default Login;

const MainLogin = styled.section`
  
  min-height: calc(100vh - 118px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e1e0e0a7;

`;

const FormLogin = styled.section`
  display: flex;
  flex-direction: column;
  height: 550px;
  width: 450px;
  border-radius: 30px;
  background-color: #ffffff;
  padding: 35px;
  min-width: 320px;
  

  h1{
    font-size: 25px;
  }

  span{
    margin-top: 25px;
  }

`

const TestData = styled.div`
  margin: 20px 10px;
  padding: 15px;
  border-radius: 10px;
  background-color: #89898944;

  h2{
    font-size: 16px ;
    text-align: center;
  }
  p{
    margin: 10px 0;
    span{
      margin-right: 15px;
      
    }
  }
  
`

const FormData = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  input{
    margin-top: 10px;
    padding: 10px 10px;
    width: 100%;
    border-radius: 10px;
    border-style: none;
    border: 1px solid #00000035;
  }

  button{
    color: white;
    font-weight: 700;
    font-size: 18px;
    padding: 10px 0;
    border-style: none;
    background-color: rgb(134, 85, 248);
  }

  
`