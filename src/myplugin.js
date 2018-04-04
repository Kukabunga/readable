function MyPlugin() {

}

MyPlugin. prototype.apply = function(compiler) {
    compiler.plugin('emit', function(compilation, callback) {
        compilation.chunks.forEach(function(chunk) {
            for(const module of chunk.modulesIterable) {
                debugger
                console.log("Module", module)
                // module.fileDependencies.forEach(function(filePath) {
                //     console.log("File Dep path"< filePath)
                // });
            };

            chunk.files.forEach(function(fileName) {
                var source = compilation.assets[fileName].source();
                // console.log("Source", source);
            })
        })
    })
}

module.exports = MyPlugin;