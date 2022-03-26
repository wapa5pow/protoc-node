import * as grpc from "@grpc/grpc-js";

import { TodoServiceService, ITodoServiceServer } from './generated/todo_service_grpc_pb'
import { CreateTodoResponse, Data, ListTodosResponse } from './generated/todo_service_pb'

const todos: Data[] = []

const ServerImpl: ITodoServiceServer = {
  createTodo: (call, callback): void => {
    console.log(call.request.toObject())
    const response = new CreateTodoResponse()
    const todo = call.request.getData()
    todo.setId(`${todos.length + 1}`)
    todos.push(todo)
    response.setData(call.request.getData())
    callback(null, response)
  },
  listTodos: (call, callback): void => {
    const response = new ListTodosResponse()
    response.setDatasList(todos)
    callback(null, response)
  }
}

function startServer() {
  const server = new grpc.Server()
  server.addService(TodoServiceService, ServerImpl)
  server.bindAsync("127.0.0.1:50051", grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        throw err;
    }
    console.log(`Server started, listening: 127.0.0.1:${port}`);
    server.start();
});
}

startServer();

process.on("uncaughtException", (err) => {
    console.log(`process on uncaughtException error: ${err}`);
});

process.on("unhandledRejection", (err) => {
    console.log(`process on unhandledRejection error: ${err}`);
});
