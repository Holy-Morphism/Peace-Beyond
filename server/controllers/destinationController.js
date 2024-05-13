const Destination = require('../models/destinationModel');

const getDestinations = async (req, res) => {
    try {
        const destinations = await Destination.getDestinations();
        res.json({ status: 'ok', destinations });
    } catch (error) {
        res.json({ status: 'error', error: error.message });
    }
}

const getDestination = async (req, res) => {
    const id = req.params.id;
    try {
        const destination = await Destination.getDestination(id);
        res.json({ status: 'ok', destination });
    } catch (error) {
        res.json({ status: 'error', error: error.message });
    }
}

const addDestination = async (req, res) => {
    const destination = req.body;
    try {
        const newDestination = await Destination.addDestination(destination);
        res.json({ status: 'ok', newDestination });
    } catch (error) {
        res.json({ status: 'error', error: error.message });
    }
}

const deleteDestination = async (req, res) => {
    const id = req.params.id;
    try {
        const destination = await Destination.deleteDestination(id);
        res.json({ status: 'ok', destination });
    } catch (error) {
        res.json({ status: 'error', error: error.message });
    }
}

const getDestinationsSkipAndLimit = async (req, res) => {
    const skip = parseInt(req.query.skip);
    const limit = parseInt(req.query.limit);
    console.log(req.query);
    try {
        const destinations = await Destination.getDestinationsForPagination(skip,limit);
        res.json({ status: 'ok', destinations });
    } catch (error) {
        console.log(error.message);
        res.json({ status: 'error', error: error.message });
    }
}

module.exports = {
    getDestinations,
    getDestination,
    addDestination,
    deleteDestination,
    getDestinationsSkipAndLimit
}