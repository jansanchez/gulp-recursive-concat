/**
 * Module dependencies.
 */

var Transform = require('stream').Transform,
	Path = require("path"),
	Buffer = require('buffer').Buffer,
	Concat = require('concat-with-sourcemaps'),
	File = require('vinyl'),
	fs = require('fs'),
	utils = require('./utils');


/**
 * Gulp Recursive Concat.
 */

function RecursiveConcat(options) {

	this.concat = null;
	this.currentCountDirectories = 0;
	this.currentCountFiles = 0;
	this.currentFolder = null;
	this.newFileGenerated = null;
	this.newFinalFile = "";
	this.options = options;
	this.walkCounter=0;
	this.stream = new Transform({objectMode: true});
	this.stream._transform = function(chunk, encoding, callback){
		var fullPath = null,
			file = {},
			relative = chunk.relative;

		file.base = chunk.base;
		file.contents = chunk.contents;

		file.extname = Path.extname(relative);
		file.basename = Path.basename(relative, file.extname);
		file.dirname = Path.dirname(relative);
		file.newDirname = utils.fixDirName(file.dirname);
		fullPath = file.newDirname + file.basename + file.extname;
		file.path = Path.join(chunk.base, fullPath);

		if (!file.relative) {
			file.relative = relative;
		}
		callback(null, self.walk(file));
	};

	var self = this;

	return this.stream;
}

RecursiveConcat.prototype.walk = function(file){
	this.walkCounter++;

	var newFile = utils.getFolderName(file.base, file.newDirname),
		basepath = file.base + file.newDirname,
		numberFiles = 0,
		numberDirectories = 0;

	this.countFilesAndDirectories(basepath, function(countFiles, countDirectories){
		numberFiles = countFiles;
		numberDirectories = countDirectories;
	});

	if (!this.concat || (newFile !== this.newFinalFile)) {
		this.concat = new Concat(false,  newFile + this.options.extension, '\n');
	}

    this.printDebugBody(file.path);
	this.concat.add(file.relative, file.contents.toString(), file.sourceMap);
	this.newFinalFile = newFile;

	if (this.walkCounter === numberFiles) {
		this.walkCounter = 0;
		this.newFileGenerated = this.makeNewFile(newFile, file);
		return this.newFileGenerated;
	}
};

RecursiveConcat.prototype.makeNewFile = function(nameFile, file){
	var regex = new RegExp(/([0-9a-z_-]+\/|\\)/gi),
	basepath = file.path.replace(file.base, ""),
	newPath = basepath.replace(/\\/g, "/"),
	arrayBasePath = newPath.match(regex),
	distBase = this.options.base || process.cwd() + "/",
	newFile = {},
	staticFile = null,
	newBasepath = '';

	if (arrayBasePath !== null) {
		if(this.options.outside) {
			arrayBasePath.pop();
		}
		newBasepath = arrayBasePath.join("");
	}

	newFile = {
		cwd: distBase,
		base: distBase,
		path: newBasepath + nameFile + this.options.extname,
		contents: new Buffer(this.concat.content)
	};

	staticFile = new File(newFile);

    this.printDebugFooter(staticFile.path);
	return staticFile;
};

RecursiveConcat.prototype.countFilesAndDirectories = function(folder, callback){
	if (this.currentFolder === folder) {
		callback(this.currentCountFiles, this.currentCountDirectories);
	}else{
		var counter = 0,
			countFiles = 0,
			countDirectories = 0,
			file = null,
			files = fs.readdirSync(folder),
			total = files.length,
			i = 0;

		for (i = 0; i < total; i++) {
			counter++;
			file = fs.statSync(folder + files[i]);

			if (file.isFile()) {
				countFiles++;
			}else{
				countDirectories++;
			}
		}

		if (counter === total) {
			this.currentCountFiles = countFiles;
			this.currentCountDirectories = countDirectories;
			callback(countFiles, countDirectories);
		}
	}
};

RecursiveConcat.prototype.printDebugBody = function(filePath){
    if(this.options.debug){
        console.log(' | ' + filePath);
    }
};

RecursiveConcat.prototype.printDebugFooter = function(filePath){
    if(this.options.debug){
        console.log(' Done ---> ' + filePath);
    }
};

/**
 * Expose `RecursiveConcat`.
 */

module.exports = RecursiveConcat;
