const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
};






async function newTicket(req, res) {
    res.render('tickets/new', { flightId: req.params.id });
}

async function create(req, res) {
    req.body.flight = req.params.id;
    try {
        await Ticket.create(req.body);
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/flights/${req.params.id}`);
}