module.exports = {
  getHouses: (req, res) => {
    req.app.get('db').get_houses().then(response => {
      res.status(200).send(response);
    })
  },
  addHouse: (req, res) => {
    const {name, address, city, state, zip} = req.body;
    req.app.get('db').add_house([name, address, city, state, zip]).then( () => {
      res.status(200).send('added house successfully');
    })
  }
}