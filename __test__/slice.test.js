import slice from '../src/filters/slice';

test( 'slice should work', () => {
	const v = [
		{ test: 1 },
		{ test: 2 },
		{ test: 3 },
		{ test: 4 },
		{ test: 5 },
	];
	const sliced = slice( v, 3 );
	expect( sliced[ 0 ] ).toBe( v[ 0 ] );
	expect( sliced[ 1 ] ).toBe( v[ 1 ] );
	expect( sliced[ 2 ] ).toBe( v[ 2 ] );
	expect( sliced[ 3 ] ).toBe( void 0 );
} );
