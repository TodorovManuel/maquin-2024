import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import ProductService from '@src/services/ProductService';
import { IProduct } from '@src/models/Product';
import { IReq, IRes } from './types/express/misc';


// **** Functions **** //

/**
 * Get all products.
 */
async function getAll(_: IReq, res: IRes) {
  const products = await ProductService.getAll();
  return res.status(HttpStatusCodes.OK).json({ products });
}

/**
 * Add one product.
 */
async function add(req: IReq<{product: IProduct}>, res: IRes) {
  const { product } = req.body;
  await ProductService.addOne(product);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one product.
 */
async function update(req: IReq<{product: IProduct}>, res: IRes) {
  const { product } = req.body;
  await ProductService.updateOne(product);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one product.
 */
async function delete_(req: IReq, res: IRes) {
  const id = +req.params.id;
  await ProductService.delete(id);
  return res.status(HttpStatusCodes.OK).end();
}


// **** Export default **** //

export default {
  getAll,
  add,
  update,
  delete: delete_,
} as const;
