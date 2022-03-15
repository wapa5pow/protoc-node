import * as jspb from 'google-protobuf'



export class NestedData extends jspb.Message {
  getStringValue(): string;
  setStringValue(value: string): NestedData;

  getInt32Value(): number;
  setInt32Value(value: number): NestedData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NestedData.AsObject;
  static toObject(includeInstance: boolean, msg: NestedData): NestedData.AsObject;
  static fromObject(object: NestedData.AsObject): NestedData;
  static serializeBinaryToWriter(message: NestedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NestedData;
  static deserializeBinaryFromReader(message: NestedData, reader: jspb.BinaryReader): NestedData;
}

export namespace NestedData {
  export type AsObject = {
    stringValue: string,
    int32Value: number,
  }
}

export class Data extends jspb.Message {
  getBoolValue(): boolean;
  setBoolValue(value: boolean): Data;

  getStringValue(): string;
  setStringValue(value: string): Data;

  getBytesValue(): Uint8Array | string;
  getBytesValue_asU8(): Uint8Array;
  getBytesValue_asB64(): string;
  setBytesValue(value: Uint8Array | string): Data;

  getInt32Value(): number;
  setInt32Value(value: number): Data;

  getFixed32Value(): number;
  setFixed32Value(value: number): Data;

  getUint32Value(): number;
  setUint32Value(value: number): Data;

  getInt64Value(): number;
  setInt64Value(value: number): Data;

  getFixed64Value(): number;
  setFixed64Value(value: number): Data;

  getUint64Value(): number;
  setUint64Value(value: number): Data;

  getFloatValue(): number;
  setFloatValue(value: number): Data;

  getDoubleValue(): number;
  setDoubleValue(value: number): Data;

  getNestedData(): NestedData | undefined;
  setNestedData(value?: NestedData): Data;
  hasNestedData(): boolean;
  clearNestedData(): Data;

  getNestedDatasList(): Array<NestedData>;
  setNestedDatasList(value: Array<NestedData>): Data;
  clearNestedDatasList(): Data;
  addNestedDatas(value?: NestedData, index?: number): NestedData;

  getMapNestedDatasMap(): jspb.Map<string, NestedData>;
  clearMapNestedDatasMap(): Data;

  getValueOneofFirst(): string;
  setValueOneofFirst(value: string): Data;

  getValueOneofSecond(): NestedData | undefined;
  setValueOneofSecond(value?: NestedData): Data;
  hasValueOneofSecond(): boolean;
  clearValueOneofSecond(): Data;

  getValueOneofCase(): Data.ValueOneofCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Data.AsObject;
  static toObject(includeInstance: boolean, msg: Data): Data.AsObject;
  static fromObject(object: Data.AsObject): Data;
  static serializeBinaryToWriter(message: Data, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Data;
  static deserializeBinaryFromReader(message: Data, reader: jspb.BinaryReader): Data;
}

export namespace Data {
  export type AsObject = {
    boolValue: boolean,
    stringValue: string,
    bytesValue: Uint8Array | string,
    int32Value: number,
    fixed32Value: number,
    uint32Value: number,
    int64Value: number,
    fixed64Value: number,
    uint64Value: number,
    floatValue: number,
    doubleValue: number,
    nestedData?: NestedData.AsObject,
    nestedDatasList: Array<NestedData.AsObject>,
    mapNestedDatasMap: Array<[string, NestedData.AsObject]>,
    valueOneofFirst: string,
    valueOneofSecond?: NestedData.AsObject,
  }

  export enum ValueOneofCase { 
    VALUE_ONEOF_NOT_SET = 0,
    VALUE_ONEOF_FIRST = 15,
    VALUE_ONEOF_SECOND = 16,
  }
}

export class CheckRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CheckRequest;

  getData(): Data | undefined;
  setData(value?: Data): CheckRequest;
  hasData(): boolean;
  clearData(): CheckRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckRequest): CheckRequest.AsObject;
  static fromObject(object: CheckRequest.AsObject): CheckRequest;
  static serializeBinaryToWriter(message: CheckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckRequest;
  static deserializeBinaryFromReader(message: CheckRequest, reader: jspb.BinaryReader): CheckRequest;
}

export namespace CheckRequest {
  export type AsObject = {
    name: string,
    data?: Data.AsObject,
  }
}

export class CheckResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): CheckResponse;

  getData(): Data | undefined;
  setData(value?: Data): CheckResponse;
  hasData(): boolean;
  clearData(): CheckResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckResponse): CheckResponse.AsObject;
  static fromObject(object: CheckResponse.AsObject): CheckResponse;
  static serializeBinaryToWriter(message: CheckResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckResponse;
  static deserializeBinaryFromReader(message: CheckResponse, reader: jspb.BinaryReader): CheckResponse;
}

export namespace CheckResponse {
  export type AsObject = {
    message: string,
    data?: Data.AsObject,
  }
}

