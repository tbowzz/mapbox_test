var express = require('express');
var app = express();
const path = require('path');
const router = express.Router();
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});
app.use('/', router);
app.use('/static', express.static('public'))
app.listen(3000, function () {
  console.log('Listening on port 3000');
});