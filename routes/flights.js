const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');



// default /flights
// GET /flights (index)
router.get('/', flightsCtrl.index);
// GET /new (new action)
router.get('/new', flightsCtrl.new);
// POST /flights (post action)
router.post('/', flightsCtrl.create);




module.exports = router;
