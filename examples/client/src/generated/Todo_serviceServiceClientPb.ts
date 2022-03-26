/**
 * @fileoverview gRPC-Web generated client stub for example
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as todo_service_pb from './todo_service_pb';


export class TodoServiceClient {
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

  methodDescriptorCreateTodo = new grpcWeb.MethodDescriptor(
    '/example.TodoService/CreateTodo',
    grpcWeb.MethodType.UNARY,
    todo_service_pb.CreateTodoRequest,
    todo_service_pb.CreateTodoResponse,
    (request: todo_service_pb.CreateTodoRequest) => {
      return request.serializeBinary();
    },
    todo_service_pb.CreateTodoResponse.deserializeBinary
  );

  createTodo(
    request: todo_service_pb.CreateTodoRequest,
    metadata: grpcWeb.Metadata | null): Promise<todo_service_pb.CreateTodoResponse>;

  createTodo(
    request: todo_service_pb.CreateTodoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: todo_service_pb.CreateTodoResponse) => void): grpcWeb.ClientReadableStream<todo_service_pb.CreateTodoResponse>;

  createTodo(
    request: todo_service_pb.CreateTodoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: todo_service_pb.CreateTodoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/example.TodoService/CreateTodo',
        request,
        metadata || {},
        this.methodDescriptorCreateTodo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/example.TodoService/CreateTodo',
    request,
    metadata || {},
    this.methodDescriptorCreateTodo);
  }

  methodDescriptorListTodos = new grpcWeb.MethodDescriptor(
    '/example.TodoService/ListTodos',
    grpcWeb.MethodType.UNARY,
    todo_service_pb.ListTodosRequest,
    todo_service_pb.ListTodosResponse,
    (request: todo_service_pb.ListTodosRequest) => {
      return request.serializeBinary();
    },
    todo_service_pb.ListTodosResponse.deserializeBinary
  );

  listTodos(
    request: todo_service_pb.ListTodosRequest,
    metadata: grpcWeb.Metadata | null): Promise<todo_service_pb.ListTodosResponse>;

  listTodos(
    request: todo_service_pb.ListTodosRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: todo_service_pb.ListTodosResponse) => void): grpcWeb.ClientReadableStream<todo_service_pb.ListTodosResponse>;

  listTodos(
    request: todo_service_pb.ListTodosRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: todo_service_pb.ListTodosResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/example.TodoService/ListTodos',
        request,
        metadata || {},
        this.methodDescriptorListTodos,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/example.TodoService/ListTodos',
    request,
    metadata || {},
    this.methodDescriptorListTodos);
  }

}

