import { IProduct } from '@src/models/Product';
import { getRandomInt } from '@src/util/misc';
import orm from './MockOrm';


// **** Functions **** //

/**
 * Get one product.
 */
async function getOne(description: string): Promise<IProduct | null> {
  const db = await orm.openDb();
  for (const product of db.products) {
    if (product.description === description) {
      return product;
    }
  }
  return null;
}

/**
 * See if a product with the given id exists.
 */
async function persists(id: number): Promise<boolean> {
  const db = await orm.openDb();
  for (const product of db.products) {
    if (product.id === id) {
      return true;
    }
  }
  return false;
}

/**
 * Get all products.
 */
async function getAll(): Promise<IProduct[]> {
  const db = await orm.openDb();
  return db.products;
}

/**
 * Add one product.
 */
async function add(product: IProduct): Promise<void> {
  const db = await orm.openDb();
  product.id = getRandomInt();
  db.products.push(product);
  return orm.saveDb(db);
}

/**
 * Update a product.
 */
async function update(product: IProduct): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.products.length; i++) {
    if (db.products[i].id === product.id) {
      const dbProduct = db.products[i];
      db.products[i] = {
        ...dbProduct,
        name: product.name,
        description: product.description,
      };
      return orm.saveDb(db);
    }
  }
}

/**
 * Delete one product.
 */
async function delete_(id: number): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.products.length; i++) {
    if (db.products[i].id === id) {
      db.products.splice(i, 1);
      return orm.saveDb(db);
    }
  }
}


// **** Export default **** //

export default {
  getOne,
  persists,
  getAll,
  add,
  update,
  delete: delete_,
} as const;
