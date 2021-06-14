#! /usr/bin/env node
const {execSync} = require('child_process');
const {resolve} = require('path');

const child = execSync(`node ${resolve(__dirname, '..', 'local.js')}`, { stdio: 'inherit' });