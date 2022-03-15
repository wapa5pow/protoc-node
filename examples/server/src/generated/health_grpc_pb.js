// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var health_pb = require('./health_pb.js');

function serialize_example_CheckRequest(arg) {
  if (!(arg instanceof health_pb.CheckRequest)) {
    throw new Error('Expected argument of type example.CheckRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_CheckRequest(buffer_arg) {
  return health_pb.CheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_example_CheckResponse(arg) {
  if (!(arg instanceof health_pb.CheckResponse)) {
    throw new Error('Expected argument of type example.CheckResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_CheckResponse(buffer_arg) {
  return health_pb.CheckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var HealthServiceService = exports.HealthServiceService = {
  check: {
    path: '/example.HealthService/Check',
    requestStream: false,
    responseStream: false,
    requestType: health_pb.CheckRequest,
    responseType: health_pb.CheckResponse,
    requestSerialize: serialize_example_CheckRequest,
    requestDeserialize: deserialize_example_CheckRequest,
    responseSerialize: serialize_example_CheckResponse,
    responseDeserialize: deserialize_example_CheckResponse,
  },
};

exports.HealthServiceClient = grpc.makeGenericClientConstructor(HealthServiceService);
