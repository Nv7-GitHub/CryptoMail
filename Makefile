install:
	# Go Instalation
	go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.26
	go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.1

	# Typescript Installation
	cd frontend&&npm install&&cd ..

proto:
	# Go Generation
	protoc --go_out=. --go-grpc_out=. grpc/cryptomail.proto

	# Typescript Generation
	cp grpc/cryptomail.proto cryptomail.proto
	protoc --plugin="protoc-gen-ts=frontend/node_modules/.bin/protoc-gen-ts" --js_out="import_style=commonjs,binary:frontend/pb" --ts_out="service=grpc-web:frontend/pb" cryptomail.proto
	rm cryptomail.proto

build:
	# Build JS
	cd frontend&&npm run build&&cd ..

	# Copy to Backend
	cp -a frontend/dist/. backend/dist
	
	# Build Go
	cd backend && go build -tags="prod" -o CryptoMail && cd ..
	cp backend/CryptoMail CryptoMail

	# Cleanup
	rm -rf backend/dist
	rm backend/CryptoMail