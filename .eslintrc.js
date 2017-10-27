module.exports = {
  'extends': [
    'eslint:recommended',
    'plugin:flowtype/recommended',
    'plugin:react/recommended'
  ],
  'plugins': [
    'react',
    'jsx-a11y',
    'import',
    'flowtype'
  ],
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 2017,
    'sourceType': 'module',
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    }
  },
  'settings': {
    'import/resolver': {
      'babel-module': {}
    }
  },
  'env': {
    'es6': true,
    'browser': true,
    'jest': true,
    'node': true
  },
  'rules': {
    "semi": [2, "always"],
    //# temporary disabled until the airbnb package is updated (https://github.com/airbnb/javascript/issues/1447)
    //# 'jsx-a11y/href-no-hash': 'off',
    //# permit omitting file extensions for imports
    'import/extensions': ['off', 'never'],
    //# enable eslint-plugin-prettier
    //# 'prettier/prettier': ['warn', {
    //#   'singleQuote': true
    //# }],
    //# custom preferences
    //# 'react/jsx-boolean-value': [2, 'always'],
    'react/sort-comp': [0, {
      'order': [
        'static',
        'lifecycle',
        'render',
        'everything-else'
      ]
    }]
  }
}