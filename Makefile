SHELL := /bin/bash

all: tests

tests:
	npm run test

install:
	rm -rf node_modules
	npm i