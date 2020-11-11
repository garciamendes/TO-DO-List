// React import
import { useState } from 'react'

// Third party import
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

// Local import
import '../assets/css/sign-in.scss'
import SignInImg from '../assets/images/sign-in.svg'
import Inputs from '../components/Inputs'
import Button from '../components/Button'

function SingIn() {
  const [ eyePassword, setEyePassword ] = useState(false)

  function showPassword() {
    setEyePassword(eyePassword ? false : true)
  }
  return (
    <div id='container-main-page'>

      <div className='container-image'>
        <img src={SignInImg} alt='Image Sign in'/>
      </div>

      <div className='container-form'>
        <form>
          <label htmlFor='first-name'>First name</label>
          <Inputs style='inputs' type='text' id='first-name'/>
          <label htmlFor='user'>User</label>
          <Inputs style='inputs' type='text' id='user'/>
          <label htmlFor='password'>Password</label>
          <div>
            <Inputs style='inputs password' type={eyePassword ? 'text' : 'password'} id='password'/>
            <span className='eye-close-password'>
              {
                eyePassword
                ?
                  <AiFillEye size={35} color={'#536DFE'} onClick={showPassword}/>
                : 
                  <AiFillEyeInvisible size={35} color={'#536DFE'} onClick={showPassword} />
              }
            </span>
          </div>
        </form>

        <div className='content-btn'>
          <Button style='btn-submit-enter' title='Criar' click={() => alert('sdasdas')}/>
        </div>
      </div>

    </div>
  )
}

 export default SingIn