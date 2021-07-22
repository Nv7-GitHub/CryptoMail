# CryptoMail
E-mail, but with end-to-end encryption!

# Installing Development Dependencies
After downloading, run
```bash
make install
```
To install dependencies, tools, etc.

# Updating gRPC Stubs
Just run
```
make proto
```
Whenever the proto files are updated.

# Development Server
In the `frontend` folder, run 
```sh
npm run serve
```
to run the development frontend server. This will auto-recompile.

In the `backend` folder, run 
```sh
go run .
```
to run the backend development server. Stop it and re-start it to re-compile.
