// package: example
// file: health.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as health_pb from "./health_pb";

interface IHealthServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    check: IHealthServiceService_ICheck;
}

interface IHealthServiceService_ICheck extends grpc.MethodDefinition<health_pb.CheckRequest, health_pb.CheckResponse> {
    path: "/example.HealthService/Check";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<health_pb.CheckRequest>;
    requestDeserialize: grpc.deserialize<health_pb.CheckRequest>;
    responseSerialize: grpc.serialize<health_pb.CheckResponse>;
    responseDeserialize: grpc.deserialize<health_pb.CheckResponse>;
}

export const HealthServiceService: IHealthServiceService;

export interface IHealthServiceServer extends grpc.UntypedServiceImplementation {
    check: grpc.handleUnaryCall<health_pb.CheckRequest, health_pb.CheckResponse>;
}

export interface IHealthServiceClient {
    check(request: health_pb.CheckRequest, callback: (error: grpc.ServiceError | null, response: health_pb.CheckResponse) => void): grpc.ClientUnaryCall;
    check(request: health_pb.CheckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: health_pb.CheckResponse) => void): grpc.ClientUnaryCall;
    check(request: health_pb.CheckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: health_pb.CheckResponse) => void): grpc.ClientUnaryCall;
}

export class HealthServiceClient extends grpc.Client implements IHealthServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public check(request: health_pb.CheckRequest, callback: (error: grpc.ServiceError | null, response: health_pb.CheckResponse) => void): grpc.ClientUnaryCall;
    public check(request: health_pb.CheckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: health_pb.CheckResponse) => void): grpc.ClientUnaryCall;
    public check(request: health_pb.CheckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: health_pb.CheckResponse) => void): grpc.ClientUnaryCall;
}
