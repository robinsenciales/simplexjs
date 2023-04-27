'use strict';

const createSimplexjsApp = require('..');
const assert = require('assert').strict;

assert.strictEqual(createSimplexjsApp(), 'Hello from createSimplexjsApp');
console.info('createSimplexjsApp tests passed');
