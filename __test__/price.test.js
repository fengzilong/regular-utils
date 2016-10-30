import price from '../src/filters/price';

test( 'price should work', () => {
	expect( price( '12345678' ) ).toBe( '12,345,678' );
} );
