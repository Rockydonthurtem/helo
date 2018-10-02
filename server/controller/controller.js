const postNewUser = (req, res) => {
  const db = req.app.get("db");
  const { username, password } = req.body;

  db.postNewUser([username, password])
    .then(response => {
      console.log(response);
      res.status(200).send(response.data);
    })
    .catch(err => console.log(err));
};
module.exports = {
  postNewUser
};
