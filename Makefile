

build:
	rm -rf dist
	ng build ngx-app-store-badge

example: build
	ng s example

publish: build
	cd dist/ngx-app-store-badge && npm publish --access=public