export default function getStudentIdSum(list) {
  if (!Array.isArray(list)) {
    return 0;
  }
  const objs = [...list];

  return objs.reduce((sum, current) => sum + current.id, 0);
}
