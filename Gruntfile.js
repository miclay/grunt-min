var mountFolder = function(connect, dir) {
	return connect.static(require('path').resolve(dir));
};


module.exports = function(grunt) {
	// load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		uglify: {
			dist: {
				files: [{
					expand: true,
					cwd:'static-src/script',
					src:'**/*.js',
					dest:'static/script'
				}]
			}
		},
		cssmin:{
			dist:{
				expand:true,
				cwd:'static-src/style',
				src:'**/*.css',
				dest:'static/style'
			}
		},
	});

	grunt.registerTask('min', [
		'uglify',
		'cssmin'
	]);
};