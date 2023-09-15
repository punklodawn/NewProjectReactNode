import Product from '../models/Product.model.js';

const productDao = {};

/**
 * Devuelve todos los productos en la base de datos.
 */
productDao.findAllProducts = async () => {
	try {
		return Product.find();
	} catch (error) {
		console.error('Error product not found :', error.message);
		throw error; //
	}
};
/**
 * Devuelve todos los productos en la base de datos.
 */

export default productDao;
