const registerNewUser = (req, res) => {
  const db = req.app.get("db");
  const { username, password } = req.body;

  db.registerNewUser([username, password])
    .then(response => {
      console.log(response);
      req.session.user = response[0];

      res.status(200).send(response[0]);
    })
    .catch(err => console.log(err));
};
const loginNewUser = (req, res) => {
  console.log(req.body);
  const db = req.app.get("db");
  const { username, password } = req.body;

  db.loginNewUser([username, password])
    .then(response => {
      console.log(response);
      req.session.user = response[0];
      console.log(req.session);

      res.status(200).send(response);
    })
    .catch(err => console.log(err));
};
module.exports = {
  registerNewUser,
  loginNewUser
};
