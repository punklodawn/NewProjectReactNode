import { Router } from 'express';
import productService from '../../services/product/product.service.js';
// const uploader = require("../utils/multer");

const router = Router();

router.get('/', async (req, res) => {
	try {
		const products = await productService.find();
		res.status(200).json({ status: 'success', payload: products });
	} catch (error) {
		res.status(500).json({ status: 'error', message: error.message });
	}
});

export default router;
