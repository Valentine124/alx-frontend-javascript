export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  const objs = [...arr];
  return objs.map((obj) => obj.id);
}
