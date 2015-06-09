'use strict';

var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	watch = require('gulp-watch'),
	clean = require('gulp-clean'),
	stylish = require('jshint-stylish'),
	complexity = require('gulp-complexity');

var path = { src: {} };

path.src.js = ['./index.js', './lib/*.js'];
path.src.complexity = ['./index.js', './lib/*.js'];

gulp.task('default', ['lint'], function() {
	console.log('All the Javascript.');
});

gulp.task('lint', function() {
	return gulp.src(path.src.js)
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(jshint.reporter('fail'));
});

gulp.task('watch', function () {
	var javascriptTasks = ['lint'];

	gulp.watch(path.src.js, javascriptTasks);
});

/*
gulp.task('complexity', function(){
	return gulp.src(path.src.complexity)
		.pipe(complexity());
});
*/

var recursiveConcat = require('./index');

gulp.task('clean', function () {
	return gulp.src('demo/dist/*')
		.pipe(clean({read: false, force: true}));
});

gulp.task('concat', ['clean', 'concatenation'], function() {
	console.log('Ok.');
});

gulp.task('concatenation', function(){
	return gulp.src('./demo/source/**/*.js')
			.pipe(recursiveConcat({extname: ".js", debug: true}))
			.pipe(gulp.dest('demo/dist/'));
});
