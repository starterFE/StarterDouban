// http://eslint.org/docs/user-guide/configuring

const JSDOC_LEVEL = 1 || 0
// const ignoreMethods = ['computed', 'components', 'mounted', 'mixins']

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'filenames',
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    'valid-jsdoc': [JSDOC_LEVEL, {
      requireReturn: false,
    }],
    'require-jsdoc': [JSDOC_LEVEL, {
      'require': {
        'FunctionDeclaration': true,
        'MethodDefinition': true,
        'ClassDeclaration': true,
      }
    }],
    // 'object-literal-jsdoc/obj-doc': [JSDOC_LEVEL, {
    //   'ignoreMethods': ignoreMethods
    // }],
    // 不允许驼峰式命名
    'filenames/match-regex': [1, '^[0-9a-z-.]+$', true],
    'no-reserved-keys': [0],
    'no-debugger': [1],
    'no-alert': [1],
    'semi': [2, 'never'],
    'no-console': [1],
    'prefer-const': [0],
    'eol-last': [0],
    'object-shorthand': [0],
    'no-param-reassign': [0],
    'func-names': [0],
    'no-shadow': [1],
    'arrow-body-style': [0],
    'comma-dangle': [0],
    'space-before-function-paren': [0],
    'prefer-template': [0],
    'no-new': [0],
    'consistent-return': [0],
    'quotes': [2, "single", {"avoidEscape": true, "allowTemplateLiterals": true}],
    'array-bracket-spacing': [0],
    'no-unused-vars': [1, { 'argsIgnorePattern': '^h|context$' }],
    'computed-property-spacing': [0],
    'max-len': [1],
    'import/no-extraneous-dependencies': [0],
    'global-require': [0],
    'arrow-parens': [0],
    'linebreak-style': [0],
    'no-plusplus': [0],
    'no-underscore-dangle': [0],
    'new-cap': [0],
    'no-restricted-syntax': [0],
    'class-methods-use-this': [0],
    'import/no-unresolved': [0],
    'import/prefer-default-export': [0],
    'import/no-dynamic-require': [0],
    'import/imports-first': [0],
    'import/newline-after-import': [0],
    'import/extensions': [0],
  }
}
