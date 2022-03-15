#!/bin/bash

set -x
set -euo pipefail

CLIENT_GENERATED_DIR=client/src/generated

docker run -v $(pwd)/:/workspace/: docker.io/wapa5pow/protoc-node:3.19.4 /bin/bash -c " \
	mkdir -p ./${CLIENT_GENERATED_DIR} && \
	rm -rf ./${CLIENT_GENERATED_DIR}/* && \
	protoc \
	--js_out=import_style=commonjs,binary:${CLIENT_GENERATED_DIR} \
	--grpc-web_out=import_style=typescript,mode=grpcwebtext:${CLIENT_GENERATED_DIR} \
	-I ./proto ./proto/*.proto"