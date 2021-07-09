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

