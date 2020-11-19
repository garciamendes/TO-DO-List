// React import
import { useState } from 'react'

// Third party import
import { Link } from 'react-router-dom'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { BsArrowLeft } from 'react-icons/bs'

// Local import
import '../assets/css/sign-in.scss'
import api from "../services/api";
import SignInImg from '../assets/images/sign-in.svg'
import Inputs from '../components/Inputs'
import Button from '../components/Button'

function SingIn({ history }) {
  const [ eyePassword, setEyePassword ] = useState(false)

  const [ username, setUsername ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  function showPassword() {
    setEyePassword(eyePassword ? false : true)
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post("/register", { username, email, password });

    const { id } = response.data;

    localStorage.setItem("user", id);

    history.push("/");
  }
  return (
    <div id="container-main-page">
      <div className="container-image">
        <img src={SignInImg} alt="Image Sign in" />
      </div>

      <div className="container-form">
        <form>
          <label htmlFor="first-name">First name</label>
          <Inputs style="inputs" type="text" id="first-name" value={username} onChangeText={e => setUsername(e.target.value)}/>
          <label htmlFor="user">User</label>
          <Inputs style="inputs" type="text" id="user" value={email} onChangeText={e => setEmail(e.target.value)}/>
          <label htmlFor="password">Password</label>
          <div>
            <Inputs
              style="inputs password"
              type={eyePassword ? "text" : "password"}
              id="password"
              value={password}
              onChangeText={e => setPassword(e.target.value)}
            />
            <span className="eye-close-password">
              {eyePassword ? (
                <AiFillEye size={35} color={"#536DFE"} onClick={showPassword} />
              ) : (
                <AiFillEyeInvisible
                  size={35}
                  color={"#536DFE"}
                  onClick={showPassword}
                />
              )}
            </span>
          </div>
        </form>

        <div className="content-btn">
          <Button
            type='submit'
            style="btn-submit-enter"
            title="Criar"
            click={handleSubmit}
          />
        
          <Link to='/'>
            <BsArrowLeft size={35} color={"#536DFE"} />
          </Link>
        </div>
        
      </div>
    </div>
  );
}

 export default SingIn