// package: example
// file: todo_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class NestedData extends jspb.Message { 
    getStringValue(): string;
    setStringValue(value: string): NestedData;
    getInt32Value(): number;
    setInt32Value(value: number): NestedData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NestedData.AsObject;
    static toObject(includeInstance: boolean, msg: NestedData): NestedData.AsObject;
    static fromObject(object: NestedData.AsObject): NestedData;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
    getId(): string;
    setId(value: string): Data;
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

    hasNestedData(): boolean;
    clearNestedData(): void;
    getNestedData(): NestedData | undefined;
    setNestedData(value?: NestedData): Data;
    clearNestedDatasList(): void;
    getNestedDatasList(): Array<NestedData>;
    setNestedDatasList(value: Array<NestedData>): Data;
    addNestedDatas(value?: NestedData, index?: number): NestedData;

    getMapNestedDatasMap(): jspb.Map<string, NestedData>;
    clearMapNestedDatasMap(): void;

    hasValueOneofFirst(): boolean;
    clearValueOneofFirst(): void;
    getValueOneofFirst(): string;
    setValueOneofFirst(value: string): Data;

    hasValueOneofSecond(): boolean;
    clearValueOneofSecond(): void;
    getValueOneofSecond(): NestedData | undefined;
    setValueOneofSecond(value?: NestedData): Data;

    getValueOneofCase(): Data.ValueOneofCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Data.AsObject;
    static toObject(includeInstance: boolean, msg: Data): Data.AsObject;
    static fromObject(object: Data.AsObject): Data;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Data, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Data;
    static deserializeBinaryFromReader(message: Data, reader: jspb.BinaryReader): Data;
}

export namespace Data {
    export type AsObject = {
        id: string,
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
        VALUE_ONEOF_FIRST = 16,
        VALUE_ONEOF_SECOND = 17,
    }

}

export class CreateTodoRequest extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Data | undefined;
    setData(value?: Data): CreateTodoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTodoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTodoRequest): CreateTodoRequest.AsObject;
    static fromObject(object: CreateTodoRequest.AsObject): CreateTodoRequest;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTodoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTodoRequest;
    static deserializeBinaryFromReader(message: CreateTodoRequest, reader: jspb.BinaryReader): CreateTodoRequest;
}

export namespace CreateTodoRequest {
    export type AsObject = {
        data?: Data.AsObject,
    }
}

export class CreateTodoResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Data | undefined;
    setData(value?: Data): CreateTodoResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTodoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTodoResponse): CreateTodoResponse.AsObject;
    static fromObject(object: CreateTodoResponse.AsObject): CreateTodoResponse;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTodoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTodoResponse;
    static deserializeBinaryFromReader(message: CreateTodoResponse, reader: jspb.BinaryReader): CreateTodoResponse;
}

export namespace CreateTodoResponse {
    export type AsObject = {
        data?: Data.AsObject,
    }
}

export class ListTodosRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTodosRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListTodosRequest): ListTodosRequest.AsObject;
    static fromObject(object: ListTodosRequest.AsObject): ListTodosRequest;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTodosRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTodosRequest;
    static deserializeBinaryFromReader(message: ListTodosRequest, reader: jspb.BinaryReader): ListTodosRequest;
}

export namespace ListTodosRequest {
    export type AsObject = {
    }
}

export class ListTodosResponse extends jspb.Message { 
    clearDatasList(): void;
    getDatasList(): Array<Data>;
    setDatasList(value: Array<Data>): ListTodosResponse;
    addDatas(value?: Data, index?: number): Data;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTodosResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListTodosResponse): ListTodosResponse.AsObject;
    static fromObject(object: ListTodosResponse.AsObject): ListTodosResponse;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTodosResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTodosResponse;
    static deserializeBinaryFromReader(message: ListTodosResponse, reader: jspb.BinaryReader): ListTodosResponse;
}

export namespace ListTodosResponse {
    export type AsObject = {
        datasList: Array<Data.AsObject>,
    }
}
