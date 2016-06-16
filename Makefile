build:
	babel src --out-dir dist

clean:
	rm -rf dist

example:
	webpack-dev-server --config ./webpack.dev.config.js

develop:
	webpack-dev-server --hot --inline --config ./webpack.example.config.js

.PHONY: clean example develop
