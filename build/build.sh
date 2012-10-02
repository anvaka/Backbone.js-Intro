rm -rf output
node r.js -o build.js

cp ../index.html output/index.html
mkdir -v output/css && cp -r ../css/* output/css/
mkdir -v output/js/templates && cp -r ../js/templates/* output/js/templates/
mkdir -v output/js/data && cp -r ../js/data/* output/js/data/
sed -i '' 's/js\/lib\/require.js/http:\/\/requirejs.org\/docs\/release\/1.0.5\/minified\/require.js/g' output/index.html