#!/bin/bash

(start-selenium -log ./selenium.log & npm start & npm run watch-test) 