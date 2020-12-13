import QuestionInterface from './question.interface';
import TeamInterface from './team.interface';

interface RoomInterface {
  uuid: string;
  teams: TeamInterface[];
  currentTeam: TeamInterface;
  currentQuestion: QuestionInterface;
  hiddenAnswer0: string;
  hiddenAnswer1: string;
  isFinished: boolean;
  lastAnswer: string;
}

export default RoomInterface;
