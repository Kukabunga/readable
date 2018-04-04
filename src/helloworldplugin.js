function HelloWorldPlugin(options) {

}

HelloWorldPlugin.prototype.apply = function (compiler) {
    compiler.plugin('compilation', function(compilation) {
        compilation.plugin('optimize', function() {
            console.log("assets have been optimzed");
        })
    })
}

module.exports = HelloWorldPlugin;