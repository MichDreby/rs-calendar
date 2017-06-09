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
        "react/jsx-indent": ["error", 4],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "jsx-a11y/href-no-hash": [ 2, {
            "components": [ "Link" ],
            "specialLink": [ "hrefLeft", "hrefRight" ]
          }],
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
