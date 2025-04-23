import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Menu from '../models/menuModel.js';


const menuRouter = express.Router();

menuRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const menu = await Menu.find({});
    res.send(menu);
  })
);
menuRouter.get(
  '/seed', 
  expressAsyncHandler(async (req, res) => {
    await Menu.deleteMany({});

    const createdMenus = await Menu.insertMany(data.menu);
    res.send({ createdMenus });
  })
);

menuRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const menu = await Menu.findById(req.params.id);
    if (menu) {
      res.send(menu);
    } else {
      res.status(404).send({ message: 'menu Not Found' });
    }
  })
);
export default menuRouter;