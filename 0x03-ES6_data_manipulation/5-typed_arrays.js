export default function creareInt8TypedArray(length, position, value) {
  const buff = new ArrayBuffer(length);
  const int8View = new Int8Array(buff);

  int8View[position] = value;

  return buff;
}
