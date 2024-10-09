export default function getStudentsByLocation(list, city) {
  if (!Array.isArray(list)) {
    return [];
  }
  const objs = [...list];
  return objs.filter((x) => x.location === city);
}
