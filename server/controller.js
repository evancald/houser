module.exports = {
  getHouses: (req, res) => {
    req.app.get('db').get_houses().then(response => {
      res.status(200).send(response);
    })
  },
  addHouse: (req, res) => {
    const {name, address, city, state, zip, img, mortgage, rent} = req.body;
    req.app.get('db').add_house([name, address, city, state, zip, img, mortgage, rent]).then( () => {
      res.status(200).send('added house successfully');
    })
  },
  deleteHouse: (req, res) => {
    const id = req.params.id;
    req.app.get('db').delete_house([id]).then( () => {
      res.status(200).send('deleted house successfully');
    })
  }
}