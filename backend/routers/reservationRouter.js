import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import reservation from '../models/reservationModel.js';


const reservationRouter = express.Router();

reservationRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const reservation = await Reservation.find({});
    res.send(reservation);
  })
);
reservationRouter.get(
  '/seed', 
  expressAsyncHandler(async (req, res) => {
    await Reservation.deleteMany({});

    const createdReservation = await reservation.insertMany(data.reservation);
    res.send({ createdReservation });
  })
);

reservationRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const reservation = await Reservation.findById(req.params.id);
    if (reservation) {
      res.send(reservation);
    } else {
      res.status(404).send({ message: 'reservation Not Found' });
    }
  })
);
export default reservationRouter;