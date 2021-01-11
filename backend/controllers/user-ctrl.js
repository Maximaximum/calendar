const User = require('../models/user-model')

createUser = async (req, res) => {
  const body = req.body;

  await User.findOne({ login: body.login }, (err, user) => {
      if (user) {
        return res.status(201).json({
            success: false,
            message: 'User is already registered!'
        })
      }

      if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body',
        })
      }

      
      const newUser = new User(body)

      if (!newUser) {
        return res.status(400).json({ success: false, error: err })
    }
  
      newUser
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                login: newUser.login,
                message: `User ${newUser.login} is successfully created!`,
            })
        })

    }).catch(error => {
      return res.status(400).json({
          error,
          message: 'User not created!',
      })
  })
}

login = async (req, res) => {
  await User.findOne({ login: req.body.login, password: req.body.password }, (err, user) => {
      if (err) {
          return res.status(400).json({ success: false, error: err })
      }

      if (!user) {
          return res
              .status(201)
              .json({ 
                  success: false, 
                  message: `Login or password is not correct!`,
              })
      }

      return res.status(200).json({ 
          success: true, 
          login: user.login,
          message: `You successefully logged as ${user.login}!`,
      })

  }).catch(err => console.log(err))
}

module.exports = {
  createUser,
  login,
}