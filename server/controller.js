module.exports = {
  getHouses: (req, res) => {
    req.app.get('db').get_houses().then(response => {
      res.status(200).send(response);
    })
  }
}