import moment from 'moment';


// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' + 
  'with the appropriate product keys.';


// **** Types **** //

export interface IProduct {
  id: number;
  name: string;
  description: string;
  created: Date;
}


// **** Functions **** //

/**
 * Create new Product.
 */
function new_(
  name?: string,
  description?: string,
  created?: Date,
  id?: number, // id last cause usually set by db
): IProduct {
  return {
    id: (id ?? -1),
    name: (name ?? ''),
    description: (description ?? ''),
    created: (created ? new Date(created) : new Date()),
  };
}

/**
 * Get product instance from object.
 */
function from(param: object): IProduct {
  if (!isProduct(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  const p = param as IProduct;
  return new_(p.name, p.description, p.created, p.id);
}

/**
 * See if the param meets criteria to be a product.
 */
function isProduct(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg && typeof arg.id === 'number' && 
    'description' in arg && typeof arg.description === 'string' && 
    'name' in arg && typeof arg.name === 'string' &&
    'created' in arg && moment(arg.created as string | Date).isValid()
  );
}


// **** Export default **** //

export default {
  new: new_,
  from,
  isProduct,
} as const;
