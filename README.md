# typedoc-light-theme <a name="start"></a>

[TypeDoc](https://typedoc.org/) theme that extends [default theme](https://typedoc.org/guides/themes/) and adds some useful options so that:
* to include extra links in header;
* to specify markup that is placed before project name;
* to customize project name;
* to change toolbar background;
* to show "Go top" link;
* to add custom CSS and JS;
* to create some files in documentation directory;
* and others.

## Usage <a name="usage"></a> [&#x2191;](#start)

Installation:

    npm install typedoc-light-theme --save-dev

To apply the theme instead of the default theme add `--theme` option with path to the theme files for `typedoc` command. For example:

    typedoc --out docs --readme README.md --theme ./node_modules/typedoc-light-theme/src ./src

By default the generated documentation does not differ much from the one of the default theme.
But you can use [TypeDoc options file](https://typedoc.org/guides/options/#options-1) to set necessary parameters in order to customize the generated documentation.

    typedoc --options typedoc-conf.js --out docs --readme README.md --theme ./node_modules/typedoc-light-theme/src ./src

For example:
```js
// typedoc-conf.js
module.exports = {
    "projectName": {
        "link": true,
        "style": "color: #c0f0d0;",
        "beforeLinks": "&emsp;|&emsp;"
    },
    "links": [
        {
            "text": "GitHub repo",
            "href": "https://github.com/gamtiq/wrapme",
            "normal": true
            "style": "font-size: 12px; color: #cdc;",
            "target": "_top",
            "id": "github_link"
        },
    ],
    "style": ".tsd-page-toolbar .header__link { color: #dd0fcc; }",
    "toolbarBackground": "rgba(255, 197, 197, 0.5)",
    "showGoTop": 300,
    "createFile": ".nojekyll"
};
```

All supported options are optional and described below.

#### `createFile: object | string`

A file or set of files that should be created inside output directory after documentation is generated.
You can specify content for each file.
See description of first argument of [`makef.createFile`](https://github.com/gamtiq/makef#api--) for details.

Example:
```json
"createFile": {
    ".nojekyll": "",
    "version.dat": 237
}
```

#### `headerStart: string`

Any HTML that should be placed before project name in the header.

Example:
```json
"headerStart": "<b>&gt;</b> "
```

#### `links: array`

Describes a set of links that should be added into the header.
Each link should be described by object with the following fields (the only required field is `href`):
* `class: string` - value for `class` attribute of the link; default value is `title header__link`.
* `href: string` - value for `href` attribute.
* `id: string` - value for `id` attribute.
* `normal: boolean` - when set to `true`, `header__link_normal` will be added into value for `class` attribute
    to show the link with normal font weight; default value is `false` which means that the link will be rendered
    with bold font.
* `style: string` - value for `style` attribute.
* `target: string` - value for `target` attribute; default value is `_blank`.
* `text: string` - any HTML that should be used as content of the link; by default value of `href` is used.

Example:
```json
"links": [
    {
        "text": "GitHub",
        "href": "https://github.com/gamtiq/mixing"
    },
    {
        "text": "npm",
        "href": "https://www.npmjs.com/package/mixing",
        "normal": true
    }
]
```

#### `linkDivider: string`

Any HTML that should be used to separate links specified by `links` option.
Default value is `&emsp;`.

Example:
```json
"linkDivider": " | "
```

#### `projectName: object | false`

Specifies whether and how project name should be rendered in the header.
Default value is `{ link: true, beforeLinks: '&emsp;' }`.
Use `false` to remove project name link from the header.
To customize project name element you can specify object with the following fields
(all are optional so it is possible to use an empty object as option's value):
* `after: string` - any HTML that should be placed after project name.
* `before: string` - any HTML that should be placed before project name.
* `beforeLinks: string` - any HTML that should be rendered after `after` but before links when they are specified by `links` option.
* `class: string` - value for `class` attribute of the element that is used to display project name; default value is `title header__project`.
* `href: string` - value for `href` attribute of the project link when `link` field is set to `true`; by default relative URL for `index.html` is used.
* `link: boolean` - when set to `true`, `<a>` tag will be used as the element to display project name, otherwise `<span>` will be used.
* `name: string` - text that should be used instead of project name.
* `style: string` - value for `style` attribute of the element that is used to display project name.

Example:
```json
"projectName": {
    "link": true,
    "before": "&star; ",
    "after": " &star;"
}
```

#### `script: string`

Any JS that should be inlined into documentation pages.
Can be used to customize behavior.

Example:
```json
"script": "console.log('message from light theme');"
```

#### `showGoTop: number`

Whether "Go top" link should be added in documentation pages.
Set to `0` to exclude links.
Any positive value specifies percentage of viewport height that should be scrolled before "Go top" link will be displayed.
Default value is `80`.

Example:
```json
"showGoTop": 300
```

#### `style: string`

Any CSS that should be inlined into documentation pages.
Can be used to redefine and/or add some styles.

Example:
```json
"style": "body { font-size: 12px; } .tsd-page-toolbar .header__project { color: #00c; font-size: 1.2rem; }"
```

#### `toolbarBackground: string`

Background style for the header.

Example:
```json
"toolbarBackground": "linear-gradient(#def, #fff)"
```

## Related projects <a name="related"></a> [&#x2191;](#start)

* [jsdoc-file](https://github.com/gamtiq/jsdoc-file) - JSDoc plugin to create files inside directory of generated documentation (e.g. `.nojekyll` etc).
* [makef](https://github.com/gamtiq/makef) - a utility to create files inside specified directory.

## License <a name="license"></a> [&#x2191;](#start)
Copyright (c) 2020 Denis Sikuler  
Licensed under the MIT license.
