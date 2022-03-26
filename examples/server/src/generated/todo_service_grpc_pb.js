// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var todo_service_pb = require('./todo_service_pb.js');

function serialize_example_CreateTodoRequest(arg) {
  if (!(arg instanceof todo_service_pb.CreateTodoRequest)) {
    throw new Error('Expected argument of type example.CreateTodoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_CreateTodoRequest(buffer_arg) {
  return todo_service_pb.CreateTodoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_example_CreateTodoResponse(arg) {
  if (!(arg instanceof todo_service_pb.CreateTodoResponse)) {
    throw new Error('Expected argument of type example.CreateTodoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_CreateTodoResponse(buffer_arg) {
  return todo_service_pb.CreateTodoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_example_ListTodosRequest(arg) {
  if (!(arg instanceof todo_service_pb.ListTodosRequest)) {
    throw new Error('Expected argument of type example.ListTodosRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_ListTodosRequest(buffer_arg) {
  return todo_service_pb.ListTodosRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_example_ListTodosResponse(arg) {
  if (!(arg instanceof todo_service_pb.ListTodosResponse)) {
    throw new Error('Expected argument of type example.ListTodosResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_ListTodosResponse(buffer_arg) {
  return todo_service_pb.ListTodosResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TodoServiceService = exports.TodoServiceService = {
  createTodo: {
    path: '/example.TodoService/CreateTodo',
    requestStream: false,
    responseStream: false,
    requestType: todo_service_pb.CreateTodoRequest,
    responseType: todo_service_pb.CreateTodoResponse,
    requestSerialize: serialize_example_CreateTodoRequest,
    requestDeserialize: deserialize_example_CreateTodoRequest,
    responseSerialize: serialize_example_CreateTodoResponse,
    responseDeserialize: deserialize_example_CreateTodoResponse,
  },
  listTodos: {
    path: '/example.TodoService/ListTodos',
    requestStream: false,
    responseStream: false,
    requestType: todo_service_pb.ListTodosRequest,
    responseType: todo_service_pb.ListTodosResponse,
    requestSerialize: serialize_example_ListTodosRequest,
    requestDeserialize: deserialize_example_ListTodosRequest,
    responseSerialize: serialize_example_ListTodosResponse,
    responseDeserialize: deserialize_example_ListTodosResponse,
  },
};

exports.TodoServiceClient = grpc.makeGenericClientConstructor(TodoServiceService);
