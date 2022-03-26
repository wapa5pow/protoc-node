// package: example
// file: todo_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as todo_service_pb from "./todo_service_pb";

interface ITodoServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createTodo: ITodoServiceService_ICreateTodo;
    listTodos: ITodoServiceService_IListTodos;
}

interface ITodoServiceService_ICreateTodo extends grpc.MethodDefinition<todo_service_pb.CreateTodoRequest, todo_service_pb.CreateTodoResponse> {
    path: "/example.TodoService/CreateTodo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<todo_service_pb.CreateTodoRequest>;
    requestDeserialize: grpc.deserialize<todo_service_pb.CreateTodoRequest>;
    responseSerialize: grpc.serialize<todo_service_pb.CreateTodoResponse>;
    responseDeserialize: grpc.deserialize<todo_service_pb.CreateTodoResponse>;
}
interface ITodoServiceService_IListTodos extends grpc.MethodDefinition<todo_service_pb.ListTodosRequest, todo_service_pb.ListTodosResponse> {
    path: "/example.TodoService/ListTodos";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<todo_service_pb.ListTodosRequest>;
    requestDeserialize: grpc.deserialize<todo_service_pb.ListTodosRequest>;
    responseSerialize: grpc.serialize<todo_service_pb.ListTodosResponse>;
    responseDeserialize: grpc.deserialize<todo_service_pb.ListTodosResponse>;
}

export const TodoServiceService: ITodoServiceService;

export interface ITodoServiceServer extends grpc.UntypedServiceImplementation {
    createTodo: grpc.handleUnaryCall<todo_service_pb.CreateTodoRequest, todo_service_pb.CreateTodoResponse>;
    listTodos: grpc.handleUnaryCall<todo_service_pb.ListTodosRequest, todo_service_pb.ListTodosResponse>;
}

export interface ITodoServiceClient {
    createTodo(request: todo_service_pb.CreateTodoRequest, callback: (error: grpc.ServiceError | null, response: todo_service_pb.CreateTodoResponse) => void): grpc.ClientUnaryCall;
    createTodo(request: todo_service_pb.CreateTodoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_service_pb.CreateTodoResponse) => void): grpc.ClientUnaryCall;
    createTodo(request: todo_service_pb.CreateTodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_service_pb.CreateTodoResponse) => void): grpc.ClientUnaryCall;
    listTodos(request: todo_service_pb.ListTodosRequest, callback: (error: grpc.ServiceError | null, response: todo_service_pb.ListTodosResponse) => void): grpc.ClientUnaryCall;
    listTodos(request: todo_service_pb.ListTodosRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_service_pb.ListTodosResponse) => void): grpc.ClientUnaryCall;
    listTodos(request: todo_service_pb.ListTodosRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_service_pb.ListTodosResponse) => void): grpc.ClientUnaryCall;
}

export class TodoServiceClient extends grpc.Client implements ITodoServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createTodo(request: todo_service_pb.CreateTodoRequest, callback: (error: grpc.ServiceError | null, response: todo_service_pb.CreateTodoResponse) => void): grpc.ClientUnaryCall;
    public createTodo(request: todo_service_pb.CreateTodoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_service_pb.CreateTodoResponse) => void): grpc.ClientUnaryCall;
    public createTodo(request: todo_service_pb.CreateTodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_service_pb.CreateTodoResponse) => void): grpc.ClientUnaryCall;
    public listTodos(request: todo_service_pb.ListTodosRequest, callback: (error: grpc.ServiceError | null, response: todo_service_pb.ListTodosResponse) => void): grpc.ClientUnaryCall;
    public listTodos(request: todo_service_pb.ListTodosRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_service_pb.ListTodosResponse) => void): grpc.ClientUnaryCall;
    public listTodos(request: todo_service_pb.ListTodosRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_service_pb.ListTodosResponse) => void): grpc.ClientUnaryCall;
}
