

build:
	rm -rf dist
	ng build ngx-app-store-badge

example: build
	ng s example