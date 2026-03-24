#!/bin/bash
BASE_DIR="app"

mkdir -p "$BASE_DIR/(marketing)"
mkdir -p "$BASE_DIR/(legal)"

# Move existing routes to Marketing Group safely
for route in "[stadtgebiet]" "faq" "kontakt" "leistungen" "preise" "servicegebiet" "ueber-uns" "bewertungen"; do
  if [ -d "$BASE_DIR/$route" ]; then
    mv "$BASE_DIR/$route" "$BASE_DIR/(marketing)/"
    echo "Moved $route to (marketing)"
  fi
done

# Move Legal routes
for route in "datenschutz" "impressum" "barrierefreiheit"; do
  if [ -d "$BASE_DIR/$route" ]; then
    mv "$BASE_DIR/$route" "$BASE_DIR/(legal)/"
    echo "Moved $route to (legal)"
  fi
done
