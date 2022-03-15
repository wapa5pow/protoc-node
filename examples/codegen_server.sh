#!/bin/bash

set -x
set -euo pipefail

SERVER_GENERATED_DIR=server/src/generated

docker run -v $(pwd)/:/workspace/: docker.io/wapa5pow/protoc-node:3.19.4 /bin/bash -c " \
	mkdir -p ./${SERVER_GENERATED_DIR} && \
	rm -rf ./${SERVER_GENERATED_DIR}/* && \
	protoc \
	--js_out=import_style=commonjs,binary:./${SERVER_GENERATED_DIR} \
	--plugin=protoc-gen-ts=/usr/local/bin/protoc-gen-ts \
	--ts_out=grpc_js:./${SERVER_GENERATED_DIR} \
	--plugin=protoc-gen-grpc=/usr/local/bin/grpc_tools_node_protoc_plugin \
	--grpc_out=grpc_js:./${SERVER_GENERATED_DIR} \
	-I ./proto \
	./proto/*.proto"