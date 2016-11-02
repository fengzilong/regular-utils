export default function ( value ) {
	value = String( value );
	const [ integer, decimal ] = value.split( '.' );

	return divide( String( integer ), 3 ).join( ',' ) +
		( decimal ? `.${ decimal }` : '' );
}

function divide( str, len ) {
	const result = [];

	str = str.split( '' );

	if ( str.length % len > 0 ) {
		const first = str.splice( 0, str.length % len );
		result.push( first );
	}

	let tmp = str.splice( 0, len );
	while ( tmp.length > 0 ) {
		result.push( tmp );
		tmp = str.splice( 0, len );
	}

	return result.map( v => v.join( '' ) );
}
