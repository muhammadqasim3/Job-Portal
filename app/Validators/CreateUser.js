'use strict'

class CreateUser {
  get rules () {
    return {
      // unique to users table 
      'username': 'required|unique:users',
      'email': 'required|unique:users',
      'password': 'required',
      
    }
  }

  get messages(){
    return {
      'required': 'The {{ field }} is required.',
      'unique': 'The {{ field }} already exists.'
    }
  }

  async fails(error) {
    // ctx = context 
    this.ctx.session.withErrors(error)
    .flashAll();

    return this.ctx.response.redirect('back');
  }
}

module.exports = CreateUser
