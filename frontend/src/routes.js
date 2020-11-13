// Third party import
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

// Local import
import Login from './pages/Login'
import SignIn from './pages/SignIn'
import Home from './pages/Home'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login}/>
        <Route path='/sign-in' exact component={SignIn}/>
        <Route path='/home' exact component={Home}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes