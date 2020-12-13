import RoomState from '../enums/room-state.enum';
import Room from '../interfaces/room.interface';
import teams from './teams';

const roomA: Room = {
  identifier: 'asdf',
  state: RoomState.CLOSED,
  teams: teams,
};

const roomB: Room = {
  identifier: 'asdf',
  state: RoomState.IN_PROGRESS,
  teams: teams,
  activeTeamIdentifier: 't01',
};

const generateRoom = () => {
  return Math.random() * 2 > 1 ? roomA : roomB;
};

export default generateRoom;
