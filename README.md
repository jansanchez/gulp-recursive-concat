
# Gulp Recursive Concatenation [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

> A gulp plugin for Recursive Concatenation


## Getting Started

#### Install:

```
npm install --save-dev gulp-recursive-concat
```

#### How to use:

```javascript
	var recursiveConcat = require('gulp-recursive-concat');

	gulp.task('concatenation', function(){
		return gulp.src('source/**/*.js')
		.pipe(recursiveConcat({extname: ".js"}))
		.pipe(gulp.dest('dist/'));
});
```

[npm-url]: https://www.npmjs.org/package/gulp-recursive-concat
[npm-image]: http://img.shields.io/npm/v/gulp-recursive-concat.svg

[travis-url]: https://travis-ci.org/jansanchez/gulp-recursive-concat
[travis-image]: http://img.shields.io/travis/jansanchez/gulp-recursive-concat.svg