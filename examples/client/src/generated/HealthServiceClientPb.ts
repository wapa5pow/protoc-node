/**
 * @fileoverview gRPC-Web generated client stub for example
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as health_pb from './health_pb';


export class HealthServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorCheck = new grpcWeb.MethodDescriptor(
    '/example.HealthService/Check',
    grpcWeb.MethodType.UNARY,
    health_pb.CheckRequest,
    health_pb.CheckResponse,
    (request: health_pb.CheckRequest) => {
      return request.serializeBinary();
    },
    health_pb.CheckResponse.deserializeBinary
  );

  check(
    request: health_pb.CheckRequest,
    metadata: grpcWeb.Metadata | null): Promise<health_pb.CheckResponse>;

  check(
    request: health_pb.CheckRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: health_pb.CheckResponse) => void): grpcWeb.ClientReadableStream<health_pb.CheckResponse>;

  check(
    request: health_pb.CheckRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: health_pb.CheckResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/example.HealthService/Check',
        request,
        metadata || {},
        this.methodDescriptorCheck,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/example.HealthService/Check',
    request,
    metadata || {},
    this.methodDescriptorCheck);
  }

}

