import price from './filters/price';
import timeformat from './filters/timeformat';
import countdown from './directives/countdown';

export default function ( Component ) {
	Component
		.filter( 'price', price )
		.filter( 'timeformat', timeformat )
		.directive( 'r-countdown', countdown );
}
