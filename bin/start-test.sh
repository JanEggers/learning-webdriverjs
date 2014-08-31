#!/bin/bash
(rm ./selenium.log*)
(start-selenium -log ./selenium.log & npm start & npm run watch-test) 