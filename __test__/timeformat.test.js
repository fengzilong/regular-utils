import timeformat from '../src/filters/timeformat';

test( 'timeformat should work', () => {
	const formatted = timeformat(
		new Date(2016, 10, 1, 9, 10, 0).getTime(),
		'YYYY-M-D HH:mm:ss'
	);
	expect( formatted ).toBe( '2016-11-1 09:10:00' );
} );
