const Flight = require('../models/flight');


module.exports = {
    index,
    new: newFlight,
    create,
};


async function index(req, res) {
    const flights = await Flight.find({}).sort('departs');
    res.render('flights/index', { flights });
}


function newFlight(req, res) {
    const newFlight = new Flight();
    //Obtain the default date
    const dt = newFlight.departs;
    //Format the date for the value attribute 
    //of the input
    let departsDate = `S{dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
    departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
    res.render('flights/new', { errorMsg: '', departsDate });
}


async function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    try {
        await Flight.create(req.body);
        res.redirect('/flights');
    } catch (err) {
        console.log(err);
        res.render('flights/new', { errorMsg: err.message });
    }
}