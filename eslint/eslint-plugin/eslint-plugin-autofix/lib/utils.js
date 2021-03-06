"use strict";
const eslint = require("eslint");
const linter = new eslint.Linter();

exports.getFixableRule = function(ruleName, recommended = false, fixable = "code") {
    const rule = ruleName ? linter.getRules().get(ruleName) : require('eslint-plugin-deadvars').rules['dead-vars'];
    // const rule = linter.getRules().get(ruleName || 'no-unused-vars')

    rule.meta.recommended = recommended;
    rule.meta.fixable = fixable;
    return rule;
};
