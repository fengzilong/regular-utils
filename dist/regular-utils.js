(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.regularUtils = factory());
}(this, (function () { 'use strict';

var price = function( value ) {
	return divide( String( value ), 3 ).join( ',' );
};

function divide ( str, len ) {
	var result = [];

	str = str.split( '' );

	if ( str.length % len > 0 ) {
		var first = str.splice( 0, str.length % len );
		result.push( first );
	}

	var tmp = str.splice( 0, len );
	while( tmp.length > 0 ) {
		result.push( tmp );
		tmp = str.splice( 0, len );
	}

	return result.map( function (v) { return v.join( '' ); } );
}

var index = function( Component ) {
	Component
		.filter( 'price', price );
};

return index;

})));
