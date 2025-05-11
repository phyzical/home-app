#!/bin/bash

IMAGE=home-app

build-image:
	docker build -t ${IMAGE} .

run-image:
	docker run --rm \
		--name ${IMAGE} \
		-p 8080:80 \
		 ${IMAGE}
run:
	yarn
	yarn serve