VERSION=3.19.4

build:
	(cd protobuf && git submodule update --init --recursive)
	docker build -t wapa5pow/protoc-node:${VERSION} .
	docker push wapa5pow/protoc-node:${VERSION}
