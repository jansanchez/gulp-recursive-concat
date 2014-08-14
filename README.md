gulp-recursive-concat
==================

Gulp Concatenation


# Gulp Recursive Concatenation [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

> Gulp Plugin for Recursive Concatenation


## Getting Started

#### Install globally:

```
npm install --save-dev gulp-recursive-concat
```

#### How to use:

´´´javascript
	
	var recursiveConcat = require('gulp-recursive-concat');

	gulp.task('concatenation', function(){
		return gulp.src('source/**/*.js')
		.pipe(recursiveConcat({dist: 'dist/', extname: ".js"}))
		.pipe(gulp.dest('dist/'));
});
´´´

[npm-url]: https://www.npmjs.org/package/gulp-recursive-concat
[npm-image]: http://img.shields.io/npm/v/gulp-recursive-concat.svg

[travis-url]: https://travis-ci.org/jansanchez/gulp-recursive-concat
[travis-image]: http://img.shields.io/travis/jansanchez/gulp-recursive-concat.svg