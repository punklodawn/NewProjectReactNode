import axios from 'axios';

import { setProducts, setLoading, setError } from '../slices/products';

export const getProducts = () => async (dispatch) => {
	dispatch(setLoading(true));

	try {
		const { data } = await axios.get('/api/products');
		dispatch(setProducts(data.payload));
	} catch (error) {
		dispatch(
			setError(
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
					? error.message
					: 'an unexpected error has ocurred. Please try again leter'
			)
		);
	}
};
