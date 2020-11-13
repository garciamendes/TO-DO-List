// React import
import { useState } from 'react'

// Third party import
import { Link } from 'react-router-dom'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

// Local import
import '../assets/css/login.scss'
import LoginImg from '../assets/images/Login.svg'
import Inputs from '../components/Inputs'
import Button from '../components/Button'

function Login() {
  const [ eyePassword, setEyePassword ] = useState(false)

  function showPassword() {
    setEyePassword(eyePassword ? false : true)
  }

  return (
    <div id='container-main-page'>

      <div className='container-image'>
        <img src={LoginImg} alt='Image Login'/>
      </div>

      <div className='container-form'>
        <form>
          <label htmlFor='user'>User</label>
          <Inputs style='inputs' type='text' id='user'/>
          <label htmlFor='password'>Password</label>
          <div>
            <Inputs style='inputs password' type={eyePassword ? 'text' : 'password'} id='password'/>
            <span className='eye-close-password'>
              {
                eyePassword
                ?
                  <AiFillEye size={35} color={'#536DFE'} onClick={showPassword} />
                : 
                  <AiFillEyeInvisible size={35} color={'#536DFE'} onClick={showPassword} />
              }
            </span>
          </div>
        </form>

        <div className='content-btn'>
          <Button style='btn-submit-enter' title='Entrar' />
          <Link to='sign-in' className='Create-an-account'>Criar uma conta</Link>
        </div>
      </div>

    </div>
  )
}

export default Login