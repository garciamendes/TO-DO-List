// React import
import { useState } from 'react'

// Third party import
import { Link } from 'react-router-dom'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

// Local import
import '../assets/css/login.scss'
import api from '../services/api'
import LoginImg from '../assets/images/Login.svg'
import Inputs from '../components/Inputs'
import Button from '../components/Button'

function Login({ history }) {
  const [ eyePassword, setEyePassword ] = useState(false)

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  function showPassword({}) {
    setEyePassword(eyePassword ? false : true)
  }

   async function handleSubmit(event) {
     event.preventDefault();

     const response = await api.post("/login", { email, password });

     const { id } = response.data;

     localStorage.setItem("user", id);

     history.push("/home");
   }

  return (
    <div id="container-main-page">
      <div className="container-image">
        <img src={LoginImg} alt="Image Login" />
      </div>

      <div className="container-form">
        <form>
          <label htmlFor="user">User</label>
          <Inputs
            style="inputs"
            type="text"
            id="user"
            value={email}
            onChangeText={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <div>
            <Inputs
              style="inputs password"
              type={eyePassword ? "text" : "password"}
              id="password"
              value={password}
              onChangeText={(e) => setPassword(e.target.value)}
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
            style="btn-submit-enter"
            title="Entrar"
            click={handleSubmit}
          />
          <Link to="sign-in" className="Create-an-account">
            Criar uma conta
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login