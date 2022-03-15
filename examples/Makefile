bootstrap:
	(cd server && npm install)
	(cd client && npm install)

.PHONY: server
server:
	(cd server && npm run server)

.PHONY: client
client:
	(cd client && npm start)

.PHONY: proxy
proxy:
	docker compose up envoy

codegen: 
	./codegen_client.sh 
	./codegen_server.sh 

test:
	(cd client && npm test)