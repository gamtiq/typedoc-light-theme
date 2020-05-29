const createFile = require('makef').createFile;

const RendererComponent = require('typedoc/dist/lib/output/components').RendererComponent;
const typedocEvents = require('typedoc/dist/lib/output/events');
const ConsoleLogger = require('typedoc/dist/lib/utils/loggers').ConsoleLogger;

class CreateFileTypeDocPlugin extends RendererComponent {
    initialize() {
        this.logger = new ConsoleLogger();
        this.listenTo(
            this.owner,
            {
                [typedocEvents.RendererEvent.END]: this.onRendererEnd
            }
        );
    }

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
