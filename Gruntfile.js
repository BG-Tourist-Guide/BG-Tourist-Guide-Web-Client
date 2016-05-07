module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    ts: {
      options: {
        target: "es5",
        module: "commonjs",
        sourceMap: true,
        declaration: false,
        removeComments: false,
        noImplicitAny: true,
        experimentalDecorators: true
      },
      default: {
        src: ["app/**/*.ts", "!node_modules/**/*.ts"],
        reference: ".d.ts"
      }
    },
    tslint: {
      files: {
        src: ["app/**/*.ts"]
      }
    },
    watch: {
      ts: {
        files: ["app/**/*.ts", "!/node_modules/**/*.ts"],
        tasks: [
          'ts:default'
        ],
        options: {
          atBegin: true,
          interrupt: true
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks("grunt-tslint");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["ts:default"]);
  grunt.registerTask("all", ["ts", "tslint"]);
  grunt.registerTask("lint", ["tslint"]);
};
