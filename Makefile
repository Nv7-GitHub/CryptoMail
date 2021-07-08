install:
	go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.26
	go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.1

proto:
	protoc --go_out=backend/pb --go_opt=paths=source_relative --go-grpc_out=backend/pb --go-grpc_opt=paths=source_relative grpc/cryptomail.proto