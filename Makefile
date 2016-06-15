build:
	babel src --out-dir dist

clean:
	rm -rf dist

example:
	webpack-dev-server --config ./webpack.config.dev.js

.PHONY: clean example
