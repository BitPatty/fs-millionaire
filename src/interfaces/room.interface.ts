import RoomState from '../enums/room-state.enum';
import Team from './team.interface';

interface Room {
  identifier: string;
  teams: Team[];
  state: RoomState;
  activeTeamIdentifier?: string | null | undefined;
}

export default Room;
