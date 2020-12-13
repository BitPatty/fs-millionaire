import { useEffect, useState } from 'react';

import CreateRoomDto from '../../interfaces/create-room-dto.interface';
import CreateRoomForm from '../../components/CreateRoomForm';
import RoomInterface from '../../interfaces/room.interface';
import { createRoom } from '../../services/apiService';
import useDataHook from '../../services/useDataHook';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const [createRoomRequest, setCreateRoomRequest] = useState<any>(undefined);
  const { data: room } = useDataHook<RoomInterface>(createRoomRequest);
  const history = useHistory();

  const handleRoomCreation = (payload: CreateRoomDto) => {
    setCreateRoomRequest(() => () => createRoom(payload));
  };

  useEffect(() => {
    if (room) {
      history.push(`/room/${room.uuid}`);
    }
  }, [room, history]);

  return (
    <div>
      <CreateRoomForm onSubmit={handleRoomCreation} />
    </div>
  );
};

export default Home;
