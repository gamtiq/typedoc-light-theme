module.exports = {
    "root": true,
    "extends": [
        "guard/optimum-next",
        "guard/node"
    ],
    "parserOptions": {
        "sourceType": "module"
    },
    "overrides": [
        {
            "files": [".eslintrc.js"],
            "rules": {
                "quotes": "off"
            }
        }
    ]
};
