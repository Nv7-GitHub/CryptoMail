// package: cryptomail
// file: cryptomail.proto

import * as cryptomail_pb from "./cryptomail_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CryptoMailAdd = {
  readonly methodName: string;
  readonly service: typeof CryptoMail;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cryptomail_pb.AddRequest;
  readonly responseType: typeof cryptomail_pb.AddResponse;
};

export class CryptoMail {
  static readonly serviceName: string;
  static readonly Add: CryptoMailAdd;
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
  add(
    requestMessage: cryptomail_pb.AddRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cryptomail_pb.AddResponse|null) => void
  ): UnaryResponse;
  add(
    requestMessage: cryptomail_pb.AddRequest,
    callback: (error: ServiceError|null, responseMessage: cryptomail_pb.AddResponse|null) => void
  ): UnaryResponse;
}

