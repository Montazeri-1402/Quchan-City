var express= require('express');
var router = express.Router();
const notes = require('../data/notes');

/* GET notes listing. */
router.get('/', function (req, res, next) {
  res.send(notes);
});
router.get('/first', function (req, res, next) { 
  res.send(notes[0]);
});
router.post('/', function (req, res, next) {
  notes.push(req.body);
  res.status(201).send(notes[notes.length]);
});

router.delete('/', (req, res, next) => { 
const removeIndex = req.body.index; 
if (notes.length > removeIndex) { 
  notes.splice (removeIndex, 1); 
  res.send({
    status: "success"
  });
}
else {
  res.status(400).send({
    status: "error"
  });
}
});

module.exports = router;