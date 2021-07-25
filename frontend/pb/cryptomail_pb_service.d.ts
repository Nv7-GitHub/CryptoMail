// package: cryptomail
// file: cryptomail.proto

import * as cryptomail_pb from "./cryptomail_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CryptoMailGetProfiles = {
  readonly methodName: string;
  readonly service: typeof CryptoMail;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cryptomail_pb.Null;
  readonly responseType: typeof cryptomail_pb.StringArray;
};

type CryptoMailNewProfile = {
  readonly methodName: string;
  readonly service: typeof CryptoMail;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cryptomail_pb.String;
  readonly responseType: typeof cryptomail_pb.Null;
};

type CryptoMailLoadProfile = {
  readonly methodName: string;
  readonly service: typeof CryptoMail;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cryptomail_pb.String;
  readonly responseType: typeof cryptomail_pb.Null;
};

type CryptoMailGetCurrentProfile = {
  readonly methodName: string;
  readonly service: typeof CryptoMail;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cryptomail_pb.Null;
  readonly responseType: typeof cryptomail_pb.String;
};

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

type CryptoMailRefreshMails = {
  readonly methodName: string;
  readonly service: typeof CryptoMail;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cryptomail_pb.Null;
  readonly responseType: typeof cryptomail_pb.Null;
};

type CryptoMailNewFriendRequest = {
  readonly methodName: string;
  readonly service: typeof CryptoMail;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cryptomail_pb.String;
  readonly responseType: typeof cryptomail_pb.Null;
};

type CryptoMailGetFriendRequests = {
  readonly methodName: string;
  readonly service: typeof CryptoMail;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cryptomail_pb.Null;
  readonly responseType: typeof cryptomail_pb.FriendRequestArray;
};

type CryptoMailGetFriends = {
  readonly methodName: string;
  readonly service: typeof CryptoMail;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cryptomail_pb.Null;
  readonly responseType: typeof cryptomail_pb.StringArray;
};

type CryptoMailAcceptFriendRequest = {
  readonly methodName: string;
  readonly service: typeof CryptoMail;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cryptomail_pb.String;
  readonly responseType: typeof cryptomail_pb.Null;
};

export class CryptoMail {
  static readonly serviceName: string;
  static readonly GetProfiles: CryptoMailGetProfiles;
  static readonly NewProfile: CryptoMailNewProfile;
  static readonly LoadProfile: CryptoMailLoadProfile;
  static readonly GetCurrentProfile: CryptoMailGetCurrentProfile;
  static readonly IsLoggedIn: CryptoMailIsLoggedIn;
  static readonly AuthURL: CryptoMailAuthURL;
  static readonly MakeService: CryptoMailMakeService;
  static readonly RefreshMails: CryptoMailRefreshMails;
  static readonly NewFriendRequest: CryptoMailNewFriendRequest;
  static readonly GetFriendRequests: CryptoMailGetFriendRequests;
  static readonly GetFriends: CryptoMailGetFriends;
  static readonly AcceptFriendRequest: CryptoMailAcceptFriendRequest;
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
  getProfiles(
    requestMessage: cryptomail_pb.Null,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cryptomail_pb.StringArray|null) => void
  ): UnaryResponse;
  getProfiles(
    requestMessage: cryptomail_pb.Null,
    callback: (error: ServiceError|null, responseMessage: cryptomail_pb.StringArray|null) => void
  ): UnaryResponse;
  newProfile(
    requestMessage: cryptomail_pb.String,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cryptomail_pb.Null|null) => void
  ): UnaryResponse;
  newProfile(
    requestMessage: cryptomail_pb.String,
    callback: (error: ServiceError|null, responseMessage: cryptomail_pb.Null|null) => void
  ): UnaryResponse;
  loadProfile(
    requestMessage: cryptomail_pb.String,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cryptomail_pb.Null|null) => void
  ): UnaryResponse;
  loadProfile(
    requestMessage: cryptomail_pb.String,
    callback: (error: ServiceError|null, responseMessage: cryptomail_pb.Null|null) => void
  ): UnaryResponse;
  getCurrentProfile(
    requestMessage: cryptomail_pb.Null,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cryptomail_pb.String|null) => void
  ): UnaryResponse;
  getCurrentProfile(
    requestMessage: cryptomail_pb.Null,
    callback: (error: ServiceError|null, responseMessage: cryptomail_pb.String|null) => void
  ): UnaryResponse;
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
  refreshMails(
    requestMessage: cryptomail_pb.Null,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cryptomail_pb.Null|null) => void
  ): UnaryResponse;
  refreshMails(
    requestMessage: cryptomail_pb.Null,
    callback: (error: ServiceError|null, responseMessage: cryptomail_pb.Null|null) => void
  ): UnaryResponse;
  newFriendRequest(
    requestMessage: cryptomail_pb.String,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cryptomail_pb.Null|null) => void
  ): UnaryResponse;
  newFriendRequest(
    requestMessage: cryptomail_pb.String,
    callback: (error: ServiceError|null, responseMessage: cryptomail_pb.Null|null) => void
  ): UnaryResponse;
  getFriendRequests(
    requestMessage: cryptomail_pb.Null,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cryptomail_pb.FriendRequestArray|null) => void
  ): UnaryResponse;
  getFriendRequests(
    requestMessage: cryptomail_pb.Null,
    callback: (error: ServiceError|null, responseMessage: cryptomail_pb.FriendRequestArray|null) => void
  ): UnaryResponse;
  getFriends(
    requestMessage: cryptomail_pb.Null,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cryptomail_pb.StringArray|null) => void
  ): UnaryResponse;
  getFriends(
    requestMessage: cryptomail_pb.Null,
    callback: (error: ServiceError|null, responseMessage: cryptomail_pb.StringArray|null) => void
  ): UnaryResponse;
  acceptFriendRequest(
    requestMessage: cryptomail_pb.String,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: cryptomail_pb.Null|null) => void
  ): UnaryResponse;
  acceptFriendRequest(
    requestMessage: cryptomail_pb.String,
    callback: (error: ServiceError|null, responseMessage: cryptomail_pb.Null|null) => void
  ): UnaryResponse;
}

