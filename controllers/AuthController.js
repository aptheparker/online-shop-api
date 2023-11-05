const signup = async (req, res, next) => {
  // const { name, email, password } = req.body;

  const name = '123'
  const email = '123'
  const password = '123'

  await User.create({ name, email, password })
};

const signin = async (req, res, next) => {
  // const { email, password } = req.body;

  const email = '123'
  const password = '123'

  const user = await User.findOne({ where: { email } });

  if(user){
    // go to main page
  }


}

module.exports = {
  signup,
  signin
};
