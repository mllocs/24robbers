#!/bin/bash

for image in *.jpg; do
  convert -resize 320 "$image" "${image%%.jpg}_320.jpg"
done
