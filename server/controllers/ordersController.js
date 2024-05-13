const reservation = require('../models/ordersModel');
const saveReservation = async (req, res) => {
    const reservations = req.body;
    try {
        const reservedData = await reservation.saveReservation(reservations);
        res.json({ status: 'ok', reservedData });
    } catch (error) {
        res.json({ status: 'error', error: error.message });
    }
}
module.exports = {saveReservation}