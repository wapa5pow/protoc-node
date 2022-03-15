import * as grpc from "@grpc/grpc-js";

import { HealthServiceService, IHealthServiceServer } from './generated/health_grpc_pb'
import { CheckResponse } from './generated/health_pb'

const ServerImpl: IHealthServiceServer = {
  check: (call, callback): void => {
    console.log(call.request.toObject())
    const name = call.request.getName()
    const response = new CheckResponse()
    const message = `hello ${name}!`
    response.setMessage(message)
    console.log(message)
    response.setData(call.request.getData())
    callback(null, response)
  }
}

function startServer() {
  const server = new grpc.Server()
  server.addService(HealthServiceService, ServerImpl)
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
