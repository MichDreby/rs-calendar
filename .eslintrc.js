module.exports={

    root: true,
        parser: 'babel-eslint',
        parserOptions: {
        sourceType: 'module'
    },

    "env": {
        "browser": true,
        "es6": true
    },

    extends: 'airbnb',

    'rules': {
        "indent": ["error", 4],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "jsx-a11y/href-no-hash": [ 2, {
            "components": [ "Link" ],
            "specialLink": [ "hrefLeft", "hrefRight" ]
          }],
        "no-nested-ternary": 'off',
        "no-unused-vars": 'off',
        "no-restricted-syntax": 'off',
        "react/jsx-no-bind": 'off',
        "jsx-a11y/anchor-has-content": 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        "no-shadow": 'off',
        "react/prop-types": 'off',
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
        'consistent-return':'off',
        'linebreak-style':'off',
        "react/prefer-stateless-function": [0],

        'class-methods-use-this': 0,
        // 'class-methods-use-this': ["error", { "exceptMethods": ["sendYoutubeQuery","preDraw"] }],

        'no-param-reassign': ["error", { "props": false }],
        'no-useless-escape':'off',
        'no-cond-assign':'off',
        'no-multi-assign':'off',
        'radix':'off',
    }

}
