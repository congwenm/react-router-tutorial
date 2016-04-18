#!/bin/bash
cd 'lessons'
path=$(pwd)
set -x # debugging
for i in $(ls -d */); do
  echo item: $i
  current_path="$path/$i"
  cd "$current_path"


  # remove module
   
  # echo $current_path
  # `rm -rf -- node_modules`

  npm install
done
