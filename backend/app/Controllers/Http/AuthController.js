'use strict'

// Local import
const User = use('App/Models/User')

class AuthController {
  async register({ request }) {
    const data = request.only(['username', 'email', 'password'])
    
    const user = await User.create(data)

    return user
  }

  async login({ request, auth }) {
    const { email, password } = request.all()

    let token = await auth.attempt(email, password)

    return token
  }

  async show() {
    const list = await User.all()

    const json = list.toJSON()

    return json
  }
}

module.exports = AuthController
