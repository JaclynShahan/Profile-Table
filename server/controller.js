const loginInfo = {
  username: 'jaclyn',
  password: 'password'
}

const loginUser = (req, res) => {
  req.session.user = loginInfo
  req.status(200).json(req.session.user)
}

const logoutUser = (req, res) => {
  req.session.destroy()
  req.status(200).json(req.session)
}

module.exports = {
  loginInfo,
  loginUser,
  logoutUser
}
