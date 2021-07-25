// package: cryptomail
// file: cryptomail.proto

import * as jspb from "google-protobuf";

export class Null extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Null.AsObject;
  static toObject(includeInstance: boolean, msg: Null): Null.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Null, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Null;
  static deserializeBinaryFromReader(message: Null, reader: jspb.BinaryReader): Null;
}

export namespace Null {
  export type AsObject = {
  }
}

export class Bool extends jspb.Message {
  getValue(): boolean;
  setValue(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bool.AsObject;
  static toObject(includeInstance: boolean, msg: Bool): Bool.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Bool, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bool;
  static deserializeBinaryFromReader(message: Bool, reader: jspb.BinaryReader): Bool;
}

export namespace Bool {
  export type AsObject = {
    value: boolean,
  }
}

export class String extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): String.AsObject;
  static toObject(includeInstance: boolean, msg: String): String.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: String, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): String;
  static deserializeBinaryFromReader(message: String, reader: jspb.BinaryReader): String;
}

export namespace String {
  export type AsObject = {
    value: string,
  }
}

export class Time extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Time.AsObject;
  static toObject(includeInstance: boolean, msg: Time): Time.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Time, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Time;
  static deserializeBinaryFromReader(message: Time, reader: jspb.BinaryReader): Time;
}

export namespace Time {
  export type AsObject = {
    value: number,
  }
}

export class StringArray extends jspb.Message {
  clearValsList(): void;
  getValsList(): Array<string>;
  setValsList(value: Array<string>): void;
  addVals(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringArray.AsObject;
  static toObject(includeInstance: boolean, msg: StringArray): StringArray.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StringArray, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringArray;
  static deserializeBinaryFromReader(message: StringArray, reader: jspb.BinaryReader): StringArray;
}

export namespace StringArray {
  export type AsObject = {
    valsList: Array<string>,
  }
}

export class Mail extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getFrom(): string;
  setFrom(value: string): void;

  getTo(): string;
  setTo(value: string): void;

  getSubject(): string;
  setSubject(value: string): void;

  getBody(): string;
  setBody(value: string): void;

  getDate(): number;
  setDate(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Mail.AsObject;
  static toObject(includeInstance: boolean, msg: Mail): Mail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Mail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Mail;
  static deserializeBinaryFromReader(message: Mail, reader: jspb.BinaryReader): Mail;
}

export namespace Mail {
  export type AsObject = {
    id: string,
    from: string,
    to: string,
    subject: string,
    body: string,
    date: number,
  }
}

export class MailArray extends jspb.Message {
  clearMailsList(): void;
  getMailsList(): Array<Mail>;
  setMailsList(value: Array<Mail>): void;
  addMails(value?: Mail, index?: number): Mail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MailArray.AsObject;
  static toObject(includeInstance: boolean, msg: MailArray): MailArray.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MailArray, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MailArray;
  static deserializeBinaryFromReader(message: MailArray, reader: jspb.BinaryReader): MailArray;
}

export namespace MailArray {
  export type AsObject = {
    mailsList: Array<Mail.AsObject>,
  }
}

export class FriendRequest extends jspb.Message {
  getFromme(): boolean;
  setFromme(value: boolean): void;

  getEmail(): string;
  setEmail(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FriendRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FriendRequest): FriendRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FriendRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FriendRequest;
  static deserializeBinaryFromReader(message: FriendRequest, reader: jspb.BinaryReader): FriendRequest;
}

export namespace FriendRequest {
  export type AsObject = {
    fromme: boolean,
    email: string,
    key: string,
  }
}

export class FriendRequestArray extends jspb.Message {
  clearRequestsList(): void;
  getRequestsList(): Array<FriendRequest>;
  setRequestsList(value: Array<FriendRequest>): void;
  addRequests(value?: FriendRequest, index?: number): FriendRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FriendRequestArray.AsObject;
  static toObject(includeInstance: boolean, msg: FriendRequestArray): FriendRequestArray.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FriendRequestArray, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FriendRequestArray;
  static deserializeBinaryFromReader(message: FriendRequestArray, reader: jspb.BinaryReader): FriendRequestArray;
}

export namespace FriendRequestArray {
  export type AsObject = {
    requestsList: Array<FriendRequest.AsObject>,
  }
}

export class Friend extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Friend.AsObject;
  static toObject(includeInstance: boolean, msg: Friend): Friend.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Friend, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Friend;
  static deserializeBinaryFromReader(message: Friend, reader: jspb.BinaryReader): Friend;
}

export namespace Friend {
  export type AsObject = {
    email: string,
    key: string,
  }
}

