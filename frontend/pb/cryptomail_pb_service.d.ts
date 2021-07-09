// package: cryptomail
// file: cryptomail.proto

import * as cryptomail_pb from "./cryptomail_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CryptoMailIsLoggedIn = {
  readonly methodName: string;
  readonly service: typeof CryptoMail;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cryptomail_pb.Null;
  readonly responseType: typeof cryptomail_pb.Bool;
};

type CryptoMailAuthURL = {
  readonly methodName: string;
  readonly service: typeof CryptoMail;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cryptomail_pb.Null;
  readonly responseType: typeof cryptomail_pb.String;
};

type CryptoMailMakeService = {
  readonly methodName: string;
  readonly service: typeof CryptoMail;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cryptomail_pb.Null;
  readonly responseType: typeof cryptomail_pb.Null;
};

export class CryptoMail {
  static readonly serviceName: string;
  static readonly IsLoggedIn: CryptoMailIsLoggedIn;
  static readonly AuthURL: CryptoMailAuthURL;
  static readonly MakeService: CryptoMailMakeService;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class CryptoMailClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  isLoggedIn(
    requestMessage: cryptomail_pb.Null,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cryptomail_pb.Bool|null) => void
  ): UnaryResponse;
  isLoggedIn(
    requestMessage: cryptomail_pb.Null,
    callback: (error: ServiceError|null, responseMessage: cryptomail_pb.Bool|null) => void
  ): UnaryResponse;
  authURL(
    requestMessage: cryptomail_pb.Null,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cryptomail_pb.String|null) => void
  ): UnaryResponse;
  authURL(
    requestMessage: cryptomail_pb.Null,
    callback: (error: ServiceError|null, responseMessage: cryptomail_pb.String|null) => void
  ): UnaryResponse;
  makeService(
    requestMessage: cryptomail_pb.Null,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cryptomail_pb.Null|null) => void
  ): UnaryResponse;
  makeService(
    requestMessage: cryptomail_pb.Null,
    callback: (error: ServiceError|null, responseMessage: cryptomail_pb.Null|null) => void
  ): UnaryResponse;
}

