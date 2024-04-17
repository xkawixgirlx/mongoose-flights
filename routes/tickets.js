const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');


//This router is mounted and starts with a path of '/'


// GET /tickets/new (new functionality)
router.get('/tickets/new', ticketsCtrl.new);
// POST /tickets (create functionality)
router.post('/tickets', ticketsCtrl.create);
// POST /flights/:id/tickets
router.post('/flights/:id/tickets', ticketsCtrl.addToTickets);




module.exports = router;