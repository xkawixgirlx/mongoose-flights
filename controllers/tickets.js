const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
    addToTickets,
};



async function addToTickets() {
    const flight = await Flight.find(req.params.id);
    flight.ticket.push(req.body.ticketId);
    await flight.save();
    res.redirect(`/flights/${flight._id}`);
}


async function newTicket(req, res) {
    const tickets = await Ticket.find({});
    res.render('tickets/new', { title: 'Add Ticket', tickets });
}


async function create(req, res) {
    try {
        await Ticket.create(req.body);
    } catch (err) {
        console.log(err);
    }
    res.redirect('/tickets/new');
}