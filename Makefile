SHELL := /bin/bash

.PHONY: test

all: test

test:	
	npm run test-dev

install:
	rm -rf node_modules
	npm i

