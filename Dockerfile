FROM node:16.14.2

WORKDIR /root

COPY ./protobuf ./protobuf
RUN cd protobuf && \
	./autogen.sh && \
	./configure && \
	make -j$(nproc) && \
	make check && \
	make install && \
	ldconfig

COPY ./grpc-web ./grpc-web
RUN cd grpc-web && \
	make install-plugin

RUN npm i -g typescript grpc-tools@1.11.2 
COPY ./grpc_tools_node_protoc_ts ./grpc_tools_node_protoc_ts
RUN cd grpc_tools_node_protoc_ts && \
	pwd && \
	ls && \
	npm i && \
	cd bash && \
	./build.sh && \
	cd .. && \
	npm i -g ./ 

WORKDIR /workspace