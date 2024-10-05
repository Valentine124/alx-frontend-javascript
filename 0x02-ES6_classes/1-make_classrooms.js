import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const room1 = ClassRoom(19);
  const room2 = ClassRoom(20);
  const room3 = ClassRoom(34);
  return [room1, room2, room3];
}
