import React, { useEffect, useState } from 'react';
import { TextBackgroundCorrect, TextBackgroundDefault, TextBackgroundSelected } from '../../assets';
import { applyJoker, loadRoom } from '../../services/apiService';

import Helmet from 'react-helmet';
import Joker from '../../enums/joker.enum';
import MultipleChoice from '../../components/MultipleChoice';
import RoomInterface from '../../interfaces/room.interface';
import TeamCard from '../../components/TeamCard';
import WinnerCard from '../../components/WinnerCard';
import styles from './Game.module.css';
import useDataHook from '../../services/useDataHook';
import { useParams } from 'react-router-dom';

function Game() {
  const { id: roomId } = useParams<{ id: string }>();
  const [fetchRoomRequest, setFetchRoomRequest] = useState<any>(() => () => loadRoom(roomId));
  const { data: room, isLoading, hasError } = useDataHook<RoomInterface>(fetchRoomRequest);

  const [activeTeamIdentifier, setActiveTeamIdentifier] = useState<string | null | undefined>(null);

  useEffect(() => {
    if (room != null) {
      setActiveTeamIdentifier(room.currentTeam.uuid);
    }
  }, [room]);

  const onJokerTriggerd = async (joker: Joker) => {
    if (!room || room.isFinished) return;
    await applyJoker(room.uuid, joker);
    reloadRoom();
  };

  const reloadRoom = () => {
    setFetchRoomRequest(() => () => loadRoom(roomId));
  };

  const getWinners = () => {
    if (!room || !room.isFinished) return [];
    const wins = room.teams.map(t => t.level.price);
    const maxWin = Math.max(...wins);
    return room.teams
      .filter(t => (t.level.price = maxWin))
      .map(t => <WinnerCard key={`winner_${t.uuid}`} team={t} />);
  };

  if (!room) return <div>loading</div>;

  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href={TextBackgroundCorrect} />
        <link rel="preload" as="image" href={TextBackgroundDefault} />
        <link rel="preload" as="image" href={TextBackgroundSelected} />
      </Helmet>
      <div>
        <div className={styles.row}>
          <div className={styles.team_cards}>
            {room.teams.map(team => (
              <TeamCard
                key={`team_card_${team.uuid}`}
                team={team}
                className={styles.card}
                onJokerTriggered={onJokerTriggerd}
                active={activeTeamIdentifier === team.uuid}
              />
            ))}
          </div>
        </div>
        {room.isFinished && (
          <div className={styles.room_closed}>
            <div>Sieger:</div>
            {getWinners()}
          </div>
        )}
        {!room.isFinished && (
          <div className={styles.row}>
            <MultipleChoice
              removedAnswers={room.hiddenAnswer0 ? [room.hiddenAnswer0, room.hiddenAnswer1] : []}
              onQuestionAnswered={reloadRoom}
              roomUuid={room.uuid}
              className={styles.quiz}
              question={room.currentQuestion}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Game;
