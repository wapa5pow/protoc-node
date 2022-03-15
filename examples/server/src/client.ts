import * as grpc from "@grpc/grpc-js";
import { HealthServiceClient } from "./generated/health_grpc_pb";
import { CheckRequest, CheckResponse } from "./generated/health_pb";

const client = new HealthServiceClient("127.0.0.1:50051", grpc.credentials.createInsecure());

const check = async (name: string) => {
  return new Promise((resolve, reject) => {
      const request = new CheckRequest();
      request.setName(name)

      client.check(request, (err, book: CheckResponse) => {
          if (err != null) {
              console.debug(`[getBook] err:\nerr.message: ${err.message}\nerr.stack:\n${err.stack}`);
              reject(err); return;
          }
          console.log(`[getBook] Book: ${JSON.stringify(book.toObject())}`);
          resolve(book);
      });
  });
};

async function main() {
  check('wapa5pow');
}

main().then((_) => _);

process.on("uncaughtException", (err) => {
    console.log(`process on uncaughtException error: ${err}`);
});

process.on("unhandledRejection", (err) => {
    console.log(`process on unhandledRejection error: ${err}`);
});
