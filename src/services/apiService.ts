import CreateRoomDto from '../interfaces/create-room-dto.interface';
import Joker from '../enums/joker.enum';
import RoomInterface from '../interfaces/room.interface';
import { fetch } from './fetch';

const createRoom = (data: CreateRoomDto) => {
  return fetch<RoomInterface>(`/rooms`, 'POST', data);
};

const loadRoom = (uuid: string) => {
  return fetch<RoomInterface>(`/rooms/${uuid}`);
};

const answerQuestion = (roomUuid: string, answerIdx: number) => {
  return fetch<RoomInterface>(`/rooms/${roomUuid}/answer/${answerIdx}`);
};

const applyJoker = (roomUuid: string, joker: Joker) => {
  return fetch<RoomInterface>(`/rooms/${roomUuid}/joker/${joker}`);
};

export { answerQuestion, createRoom, loadRoom, applyJoker };
