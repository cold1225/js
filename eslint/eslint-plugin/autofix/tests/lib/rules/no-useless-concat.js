/**
 * @fileoverview Tests for rule no-useless-concat
 * @author Pig Fang <g-plane@hotmail.com>
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-useless-concat");
const RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
const errors = [{ type: "BinaryExpression" }];

ruleTester.run("no-useless-concat", rule, {
    valid: [
        "2 + 3",
        "2 + '3'"
    ],
    invalid: [
        {
            code: "'a' + 'b'",
            output: "\"ab\"",
            errors
        }
    ]
});
