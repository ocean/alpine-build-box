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
# echo "---- installing gulp globally ----"
# npm install -g gulp
echo "---- running gulp build ----"
node_modules/gulp/bin/gulp --env=production

ls -al
ls -al js/
ls -al css/

exit 0
