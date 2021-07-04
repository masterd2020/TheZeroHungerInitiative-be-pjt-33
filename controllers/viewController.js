const login = (req, res) => {
  res.status(200).render('login');
};

const signup = (req, res) => {
  res.status(200).render('signup');
};

const forgotPassword = (req, res) => {
  res.status(200).render('forgot-password');
};

const resetPassword = (req, res) => {
  res.status(200).render('reset-password');
};

const forgotPasswordSuccess = (req, res) => {
  res.status(200).render('forgot-password-success');
};

module.exports = {
  login,
  signup,
  forgotPassword,
  resetPassword,
  forgotPasswordSuccess
};