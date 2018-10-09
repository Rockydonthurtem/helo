module.exports = {
  getUser: (req, res) => {
    console.log(req.session);
    res.status(200).send(req.session.user);
  }
  //   getUserAll: (req,res) => {
  //       const db = req.app.get('db')
  //       const {username, password} = req.body

  //       db.getUserAll([username, password])
  //       .then(consl)
  //   }
};
