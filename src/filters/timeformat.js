import formatTime from 'date-fns/format';

export default function ( value, format ) {
	return formatTime( new Date( Number( value ) ), format );
}
