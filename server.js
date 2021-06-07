var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer();
var cors = require('cors')
const db = require('./app/config/db.config.js');

global.__basedir = __dirname;

// force: true will drop the table if it already exists
  db.sequelize.sync({force: false}).then(() => {
    console.log('Drop and Resync with { force: true }');
  });
  app.use(cors())
// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'exp://127.0.0.1:19000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


// for parsing application/json
app.use(express.json()); 

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); 

require('./app/route/department.route.js')(app);
require('./app/route/employee.route.js')(app);
require('./app/route/user.route.js')(app);
require('./app/route/document.route')(app);
require('./app/route/right.route')(app);
require('./app/route/group.route')(app);
require('./app/route/group-right.route')(app);
require('./app/route/team.route')(app);
require('./app/route/role.route')(app);
require('./app/route/emp-team-role.route')(app);
require('./app/route/proccess.route')(app);
require('./app/route/assigned.route')(app);
require('./app/route/docType.route')(app);
require('./app/route/sender.route')(app);


// Create a Server
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})
