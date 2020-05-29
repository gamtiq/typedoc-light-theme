const { ParameterType } = require('typedoc/dist/lib/utils/options/declaration');
const CreateFilePlugin = require('./plugin').CreateFileTypeDocPlugin;

// eslint-disable-next-line func-names
module.exports = function(PluginHost) {
    const app = PluginHost.owner;
    const options = app.options;
    /*
     * Expected array:
     *  interface Link {
     *    href: string;
     *    class?: string;
     *    id?: string;
     *    normal?: boolean;
     *    style?: string;
     *    target?: string;
     *    text?: string;
     *  }
     */
    if (! options.getDeclaration('links')) {
        options.addDeclaration({ name: 'links', type: ParameterType.Mixed });
    }

    if (! options.getDeclaration('linkDivider')) {
        options.addDeclaration({
            name: 'linkDivider',
            type: ParameterType.String,
            defaultValue: '&emsp;'
        });
    }

    if (! options.getDeclaration('headerStart')) {
        options.addDeclaration({ name: 'headerStart', type: ParameterType.String });
    }

    /*
     * Expected object:
     *  interface ProjectName {
     *    link?: boolean;
     *    href?: string;
     *    name?: string;
     *    class?: string;
     *    style?: string;
     *    before?: string;
     *    after?: string;
     *    beforeLinks?: string;
     *  }
     */
    if (! options.getDeclaration('projectName')) {
        options.addDeclaration({
            name: 'projectName',
            type: ParameterType.Mixed,
            defaultValue: {
                link: true,
                beforeLinks: '&emsp;'
            }
        });
    }

    if (! options.getDeclaration('style')) {
        options.addDeclaration({ name: 'style', type: ParameterType.String });
    }

    if (! options.getDeclaration('toolbarBackground')) {
        options.addDeclaration({ name: 'toolbarBackground', type: ParameterType.String });
    }

    if (! options.getDeclaration('script')) {
        options.addDeclaration({ name: 'script', type: ParameterType.String });
    }

    if (! options.getDeclaration('showGoTop')) {
        options.addDeclaration({
            name: 'showGoTop',
            type: ParameterType.Number,
            defaultValue: 80
        });
    }

    // Plugin options

    /*
     * Object or string.
     * See makef.createFile, first parameter.
     */
    if (! options.getDeclaration('createFile')) {
        options.addDeclaration({ name: 'createFile', type: ParameterType.Mixed });
    }

    app.application.renderer.addComponent(CreateFilePlugin.ID, CreateFilePlugin);
};
