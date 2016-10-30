export default function ( element, expr ) {
	let tickId;

	this.$watch( expr, function ( endTime ) {
		clearInterval( tickId );

		tickId = setInterval( tick, 100 );

		function tick() {
			const nowTime = new Date().getTime();
			const timeobj = duration( nowTime, endTime );
			const format = element.getAttribute( 'format' );
			if ( timeobj ) {
				element.innerHTML = formatTime( timeobj, format );
			}
		}

		function formatTime( timeobj, format ) {
			const maps = {
				D: t => t.day,
				H: t => t.hour,
				M: t => t.minute,
				S: t => t.second,
				MS: t => Math.floor( t.millisecond / 100 ),
			};

			/* eslint-disable no-useless-escape */
			const reg = /\[(.+?)\]/g;
			/* eslint-enable no-useless-escape */

			return format.replace( reg, function ( _, v ) {
				const f = maps[ v ];
				if ( typeof f !== 'undefined' ) {
					return f( timeobj );
				}

				return _;
			} );
		}
	} );

	return () => {
		if ( tickId ) {
			clearInterval( tickId );
		}
	};
}

const MILLISECOND = 1;
const SECOND = MILLISECOND * 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

function duration( startTime, endTime ) {
	if ( !endTime || ( startTime >= endTime ) ) {
		return false;
	}

	const delta = endTime - startTime;

	let day = Math.floor( delta / DAY );
	let hour = Math.floor( ( delta % DAY ) / HOUR );
	let minute = Math.floor( ( delta % HOUR ) / MINUTE );
	let second = Math.floor( ( delta % MINUTE ) / SECOND );
	let millisecond = Math.floor( ( delta % SECOND ) / MILLISECOND );

	return { day, hour, minute, second, millisecond };
}
