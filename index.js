/**
 * Module dependencies.
 */

var RecursiveConcat = require('./lib/gulp-recursive-concat');


/**
 * Expose library.
 */

module.exports = function(options){
	var recursiveConcat = new RecursiveConcat(options);
	return recursiveConcat;
};
