import price from '../src/filters/price';

test( 'price should work', () => {
	expect( price( '12345678' ) ).toBe( '12,345,678' );
	expect( price( '123456' ) ).toBe( '123,456' );
} );

test( 'price should work for number', () => {
	expect( price( 12345678 ) ).toBe( '12,345,678' );
} );

test( 'price should work for float number', () => {
	expect( price( 12345.678 ) ).toBe( '12,345.678' );
} );
