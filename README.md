# regular-utils
[![npm](https://img.shields.io/npm/v/regular-utils.svg?style=flat-square)]() [![CircleCI branch](https://img.shields.io/circleci/project/github/fengzilong/regular-utils/master.svg?style=flat-square)](https://circleci.com/gh/fengzilong/regular-utils/) [![Coveralls branch](https://img.shields.io/coveralls/fengzilong/regular-utils/master.svg?style=flat-square)](https://coveralls.io/github/fengzilong/regular-utils?branch=master)

> regular utils, containing [regular](https://github.com/regularjs/regular) filters, directives and animations

## Filters

### price

```js
{ "12345678" | price } // '12,345,678'
```

### timeformat

```js
{ 1477962600000 | timeformat: 'YYYY-M-D HH:mm:ss' } // '2016-11-1 09:10:00'
```

## Directives

### countdown

```html
<div r-countdown="{ endTime }" format="[D]天[H]时[M]分[S]秒[MS]"></div>
```

## License

MIT &copy; [fengzilong](https://github.com/fengzilong)
