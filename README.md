# protoc for grpc-web and grpc-node with fromObject

According to https://github.com/protocolbuffers/protobuf/issues/1591 , there is no generated fromObject method for Protocol Bufffer compiled JavaScript file by [`protoc`](https://github.com/protocolbuffers/protobuf).
In addition to generated JavaScript file, TypeScript file with fromObject method definition is also needed to use grpc-web and grpc-node with TypeScript.

To enable `fromObject`, there are three things to fix.

1. Fix [protobuf](https://github.com/wapa5pow/protobuf/commit/2552578833c1b4dbe0ec3b6432ba0675f3b067cb) to generate fromObject method for protobuf JavaScript
2. Fix [grpc-web](https://github.com/wapa5pow/grpc-web/commit/b1924c12322cdbeafcccacc27a6966a2c2e1e7f9) to generate fromObject method for grpc-web TypeScript
3. Fix [grpc_tools_node_protoc_ts](https://github.com/wapa5pow/grpc_tools_node_protoc_ts/commit/ddfbe9a0a054d7b9d436c4081acd43ce88ccd679) to generate fromObject method for grpc-node TypeScript

This repository builds Docker image with these fix to ease file generation.

## Getting started with examples

To compile proto files, run `make codegen` under examples directory.

To run example server/proxy/client, run the following commands with separate terminals under examples directory.

```
# terminal 1
make server

# terminal 2
make proxy

# terminal 3
make client
```

Then, access to http://localhost:3000.

## How to build own Docker image for protoc

```
make build
```
