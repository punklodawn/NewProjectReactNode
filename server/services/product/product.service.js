import productDao from '../../daos/product.dao.js';
// const appConfig = require('../utils/app-config');

const productService = {};

productService.find = async () => {
	try {
		const getAllProducts = await productDao.findAllProducts();
		console.log(getAllProducts);
		if (!getAllProducts || !getAllProducts.length) {
			throw new Error('Not Found products');
		}
		return getAllProducts;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export default productService;
