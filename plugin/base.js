const RendererComponent = require('typedoc/dist/lib/output/components').RendererComponent;
const typedocEvents = require('typedoc/dist/lib/output/events');
const ConsoleLogger = require('typedoc/dist/lib/utils/loggers').ConsoleLogger;

class BaseTypeDocPlugin extends RendererComponent {
    initialize() {
        const eventMap = {};
        this.logger = new ConsoleLogger();

        if (this.onRendererBegin) {
            eventMap[typedocEvents.RendererEvent.BEGIN] = this.onRendererBegin;
        }
        if (this.onRendererEnd) {
            eventMap[typedocEvents.RendererEvent.END] = this.onRendererEnd;
        }
        this.listenTo(this.owner, eventMap);
    }
}
BaseTypeDocPlugin.ID = 'base';

exports.BaseTypeDocPlugin = BaseTypeDocPlugin;
exports['default'] = BaseTypeDocPlugin;
