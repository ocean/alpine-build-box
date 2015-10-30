#!/usr/bin/env bash

set -e

echo "---- gcc version ----"
gcc --version
echo "---- node version ----"
node --version
echo "---- npm version ----"
npm --version
echo "---- running npm install ----"
npm install

exit 0
