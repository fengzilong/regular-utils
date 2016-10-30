import price from './filters/price';

export default function ( Component ) {
	Component
		.filter( 'price', price );
}
