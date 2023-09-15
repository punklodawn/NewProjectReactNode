import productController from '../controllers/product/product.controller.js';

const router = (app) => {
	app.use('/api/products', productController);
};
export default router;
