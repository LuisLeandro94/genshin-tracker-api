const express = require('express');
app = express();
port = process.env.PORT || 3000;
mongoose = require('mongoose');
const uri = 'mongodb://localhost/WinpaktAPI';
Character = require('./api/models/characterListModel'); //created model loading here
Weapon = require('./api/models/weaponListModel'); //created model loading here
ArtifactSet = require('./api/models/artifactSetListModel'); //created model loading here
Artifact = require('./api/models/artifactListModel'); //created model loading here
// mongoose instance connection url connection
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log('DB Connected!');
  })
  .catch((err) => {
    console.log(Error, err.message);
  });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const charRoutes = require('./api/routes/characterListRoutes'); //importing route
const weapRoutes = require('./api/routes/weaponListRoutes'); //importing route
const artiRoutes = require('./api/routes/artifactListRoutes'); //importing route
const artSetRoutes = require('./api/routes/artifactSetListRoutes'); //importing route

charRoutes(app); //register the route
weapRoutes(app); //register the route
artiRoutes(app); //register the route
artSetRoutes(app); //register the route

app.get('*', (req, res) => {
  res.status(404).send({ url: req.originalUrl + ' not found' });
});
app.listen(port);
console.log('Winpakt RESTful API server started on: ' + port);
