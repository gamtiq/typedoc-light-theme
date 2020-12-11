const path = require('path');

const handlebars = require('handlebars');
const fse = require('makef').fse;

const BaseTypeDocPlugin = require('./base').BaseTypeDocPlugin;

class LightTypeDocPlugin extends BaseTypeDocPlugin {
    onRendererEnd(event) {
        const { logger } = this;
        const { settings } = event;
        const sourcePath = path.resolve(__dirname, '../light');
        const fileList = fse.readdirSync(sourcePath);
        const targetPath = path.join(event.outputDirectory, 'assets/light');

        for (let i = 0, len = fileList.length; i < len; i++) {
            const fileName = fileList[i];
            const filePath = path.join(sourcePath, fileList[i]);
            try {
                const template = fse.readFileSync(filePath, 'utf8');
                fse.outputFileSync(
                    path.join(targetPath, path.basename(fileName, '.hbs')),
                    handlebars.compile(template, {preventIndent: true})({settings})
                );
            }
            catch (e) {
                logger.error(`An error is occurred when proccessing the file ${filePath}. Error details: ${e}`);
            }
        }
    }
}
LightTypeDocPlugin.ID = 'light';

exports.LightTypeDocPlugin = LightTypeDocPlugin;
exports['default'] = LightTypeDocPlugin;
