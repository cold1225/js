/**
 * @fileoverview Tests for rule radix
 * @author Pig Fang <g-plane@hotmail.com>
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/radix");
const RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run("radix", rule, {
    valid: [
        "parseInt(a, 10)",
        { code: "parseInt(a)", options: ["as-needed"] }
    ],
    invalid: [
        {
            code: "parseInt(a)",
            output: "parseInt(a, 10)",
            errors: [{ type: "CallExpression" }]
        },
        {
            code: "parseInt(a, 10)",
            options: ["as-needed"],
            output: "parseInt(a)",
            errors: [{ type: "CallExpression" }]
        },
        {
            code: "parseInt(a, '10')",
            output: null,
            errors: [{ type: "CallExpression" }]
        }
    ]
});
