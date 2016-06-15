build:
	babel src --out-dir dist

clean:
	rm -rf dist

example:
	webpack-dev-server --config ./webpack.dev.config.js

.PHONY: clean example
