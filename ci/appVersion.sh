#!/bin/bash
repoUrl=https://github.com/leriel/modb.git
git ls-remote -t $repoUrl \
	| grep -v -|grep -v { \
	| sort -n -t. -k3 -k4 \
	| awk '{print $2}' \
	| grep -v '{}' \
	| awk -F"/" '{print $3}'
