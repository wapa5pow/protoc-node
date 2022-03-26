import { Data, NestedData } from "./generated/todo_service_pb";

export function getData(): Data {
  const data = new Data();
  data.setBoolValue(true);
  data.setStringValue("abc");
  data.setBytesValue(new TextEncoder().encode("bcd"));
  data.setInt32Value(123);
  data.setFixed32Value(234);
  data.setUint32Value(345);
  data.setInt64Value(456);
  data.setFixed64Value(567);
  data.setUint64Value(678);
  data.setFloatValue(789.5);
  data.setDoubleValue(890.123);

  const nestedData1 = new NestedData();
  nestedData1.setStringValue("nd1");
  nestedData1.setInt32Value(123);
  const nestedData2 = new NestedData();
  nestedData2.setStringValue("nd2");
  nestedData2.setInt32Value(234);

  data.setNestedData(nestedData1);
  data.setNestedDatasList([nestedData1, nestedData2]);
  data.getMapNestedDatasMap().set("1", nestedData1);
  data.getMapNestedDatasMap().set("2", nestedData2);
  data.setValueOneofFirst("first_value");

  return data;
}
