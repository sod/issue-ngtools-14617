Build `dist-with-source-map-true/` created via:
`ng build --prod --aot --build-optimizer --source-map`

Build `dist-with-source-map-false/` created via:
`ng build --prod --aot --build-optimizer`

Only difference is the `--source-map` flag. In the source map one the `big-dependency` chunk disappears.
