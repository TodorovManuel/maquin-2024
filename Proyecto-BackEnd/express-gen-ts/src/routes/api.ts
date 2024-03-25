import { Router } from 'express';
import jetValidator from 'jet-validator';

import Paths from '../constants/Paths';
import User from '@src/models/User';
import Product from '@src/models/Product';
import UserRoutes from './UserRoutes';
import ProductRoutes from './ProductRoutes';

// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();


// ** Add UserRouter ** //

const userRouter = Router();
const productRouter = Router();

// Get all users
userRouter.get(
  Paths.Users.Get,
  UserRoutes.getAll,
);
productRouter.get(
  Paths.Products.Get,
  ProductRoutes.getAll,
);

// Add one user
userRouter.post(
  Paths.Users.Add,
  validate(['user', User.isUser]),
  UserRoutes.add,
);
productRouter.post(
  Paths.Products.Add,
  validate(['product', Product.isProduct]),
  ProductRoutes.add,
);

// Update one user
userRouter.put(
  Paths.Users.Update,
  validate(['user', User.isUser]),
  UserRoutes.update,
);
productRouter.put(
  Paths.Products.Update,
  validate(['product', Product.isProduct]),
  ProductRoutes.update,
);

// Delete one user
userRouter.delete(
  Paths.Users.Delete,
  validate(['id', 'number', 'params']),
  UserRoutes.delete,
);
productRouter.delete(
  Paths.Products.Delete,
  validate(['id', 'number', 'params']),
  ProductRoutes.delete,
);

// Add UserRouter
apiRouter.use(Paths.Users.Base, userRouter);
apiRouter.use(Paths.Products.Base, productRouter);


// **** Export default **** //

export default apiRouter;
