
const Users = require('./Users/modules')
const Passwords = require('./Passwords/modules')

module.exports = function (app) {
  // register
  app.post('/Users/register', (req, res) =>
    Users.register(req, res)
  )
  // login
  app.post('/Users/login', (req, res) =>
    Users.login(req, res)
  )
  // get User
  app.post('/Users/', (req, res) =>
    Users.get(req, res)
  )

  app.post('/Users/edit', (req, res) =>
    Users.edit(req, res)
  )

  app.post('/Users/delete', (req, res) =>
    Users.delete(req, res)
  )

  app.post('/Users/verify', (req, res) => {
    Users.verify(req, res)
  })
   
  // *** PASSWORD RELATED ***

  app.post('/Passwords/reset', (req, res) =>
    Passwords.reset(req, res)
  )
  
  app.post('/Passwords/resetValidate', (req, res) =>
    Passwords.resetValidate(req, res)
  )

  // *** DEV FEATURES ***

  app.post('/Users/devDelete', (req, res) =>
    Users.devDelete(req, res)
  )

  app.post('/Users/devPassword', (req, res) =>
    Users.devPassword(req, res)
  )

}