import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Restaurant from '../models/restaurantModel.js';


const restaurantRouter = express.Router();

restaurantRouter.get(
    '/',
    expressAsyncHandler(async (req, res) => {
      const restaurants = await Restaurant.find({});
      res.send(restaurants);
    })
  );
restaurantRouter.get(
  '/seed', 
  expressAsyncHandler(async (req, res) => {
    await Restaurant.deleteMany({});

    const createdRestaurants  = await Restaurant.insertMany(data.restaurants);
    res.send({ createdRestaurants });
  })
);

restaurantRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const restaurant = await Restaurant.findById(req.params.id);
    if (restaurant) {
      res.send(restaurant);
    } else {
      res.status(404).send({ message: 'restaurant Not Found' });
    }
  })
);
export default restaurantRouter;