import { Data } from "./generated/health_pb";
import { getData } from "./util";

test('object build from fromJson equals to toObject', () => {
	const data = getData();
	const object = data.toObject()
	const fromObjectData = Data.fromObject(object)
	expect(fromObjectData.getBoolValue()).toBe(true)
	expect(fromObjectData.getStringValue()).toBe('abc')
	expect(new TextDecoder().decode(fromObjectData.getBytesValue_asU8())).toBe('bcd')
	expect(fromObjectData.getInt32Value()).toBe(123)
	expect(fromObjectData.getFixed32Value()).toBe(234)
	expect(fromObjectData.getUint32Value()).toBe(345)
	expect(fromObjectData.getInt64Value()).toBe(456)
	expect(fromObjectData.getFixed64Value()).toBe(567)
	expect(fromObjectData.getUint64Value()).toBe(678)
	expect(fromObjectData.getFloatValue()).toBe(789.5)
	expect(fromObjectData.getDoubleValue()).toBe(890.123)

	const data1 = fromObjectData.getNestedData()!
	expect(data1.getStringValue()).toBe('nd1')
	expect(data1.getInt32Value()).toBe(123)

	const datas = fromObjectData.getNestedDatasList()
	expect(datas[1].getStringValue()).toBe('nd2')
	expect(datas[1].getInt32Value()).toBe(234)

	const mapData1 = fromObjectData.getMapNestedDatasMap().get('1')!
	expect(mapData1.getStringValue()).toBe('nd1')
	expect(mapData1.getInt32Value()).toBe(123)
	const mapData2 = fromObjectData.getMapNestedDatasMap().get('2')!
	expect(mapData2.getStringValue()).toBe('nd2')
	expect(mapData2.getInt32Value()).toBe(234)

	const fromJsonObject = fromObjectData.toObject()
	expect(object).toEqual(fromJsonObject);
});