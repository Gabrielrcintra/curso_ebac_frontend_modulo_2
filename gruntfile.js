module.exports = function(grunt) {   
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"), // Lê o package.json
        less: {
            development: {                
                files: {
                    // Em desenvolvimento, geramos um arquivo sem minificar
                    "build/main.css": "src/main.less"
                }
            },
            production: {                
                files: {
                    // Em produção, geramos um arquivo CSS minificado
                    "build/main.min.css": "src/main.less"
                }
            }
        },
        // Configuração do Uglify (compressão JS)
        uglify: {
            development: {
                files: {
                    // Em desenvolvimento, não minificamos o código
                    "build/main.js": ["src/js/*.js"]
                }
            },
            production: {
                files: {
                    // Em produção, geramos um código JS minificado
                    "build/main.min.js": ["src/js/*.js"]
                }
            }
        }
    });

    // Carregar os plugins
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    // Registrar tarefas padrão
    grunt.registerTask("default", ["less:development", "uglify:development"]);
    grunt.registerTask("build", ["less:production", "uglify:production"]);
};
