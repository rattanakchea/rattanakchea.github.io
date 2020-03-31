var express = require('express');
var router = express.Router();
const multer = require('multer') //handling mutipart/form-data

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
})

const upload = multer({ storage }) // for parsing multipart/form-data

router.get('/', function (req, res, next) {
  res.send('Get Upload');
});

// expect body json or urlencoded, express has a parser for both data
router.post('/form', function (req, res) {
  console.log(req.body)

  // res.send('Post to form');
  res.json(req.body)
});

// expect body json or urlencoded, express has a parser for both data
router.post('/file', upload.single('fileName'), function (req, res) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any

  const file = req.file;

  console.log('file ', file);

  // res.send('Post to form');
  res.json(req.body)
});



module.exports = router;
