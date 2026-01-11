#!/bin/bash

# This script converts all .jpeg and .jpg files in the public/ids directory to .webp format.

find public/ids -type f \( -iname "*.jpeg" -o -iname "*.jpg" \) | while read -r img; do
  echo "Converting $img to WebP..."
  # Preserve the original filename, but change the extension
  output_file="${img%.*}.webp"
  cwebp -q 80 "$img" -o "$output_file"
  if [ $? -eq 0 ]; then
    echo "Conversion successful, deleting original file."
    rm "$img"
  else
    echo "Error converting $img."
  fi
done

echo "Image conversion complete."
