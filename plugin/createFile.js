const createFile = require('makef').createFile;

const BaseTypeDocPlugin = require('./base').BaseTypeDocPlugin;

class CreateFileTypeDocPlugin extends BaseTypeDocPlugin {
    onRendererEnd(event) {
        const { settings } = event;
        createFile(
            settings.createFile,
            {
                dir: event.outputDirectory,
                logger: this.logger,
                data: settings
            }
        );
    }
}
CreateFileTypeDocPlugin.ID = 'createFile';

exports.CreateFileTypeDocPlugin = CreateFileTypeDocPlugin;
exports['default'] = CreateFileTypeDocPlugin;
