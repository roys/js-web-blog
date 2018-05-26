#!/bin/bash
set -x # echo on

node ./publish/contents-translator.js > ./website/contents_json.js
