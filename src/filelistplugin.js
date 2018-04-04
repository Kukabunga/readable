function FileListPlugin() {

}

FileListPlugin.prototype.apply = function(compiler) {
    compiler.plugin('emit', function(compilation, callback) {
        var filelist = 'In this build \n\n';
        for(var file in compilation.assets) {
            filelist += `- ${file}\n`;
        }
        compilation.assets['filelist.md'] = {
            source: function() {
                return filelist;
            },
            size: function() {
                return filelist.length;
            }
        };
        callback();
    });
};

module.exports = FileListPlugin;