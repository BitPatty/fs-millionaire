import Helmet from 'react-helmet';
import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
import { TextBackgroundCorrect, TextBackgroundDefault, TextBackgroundSelected } from '../../assets';

import MultipleChoice from '../../components/MultipleChoice';
import TeamCard from '../../components/TeamCard';
import Joker from '../../enums/joker.enum';

import generateRoom from '../../mock/generate-room';

import styles from './Game.module.css';
import RoomState from '../../enums/room-state.enum';
import WinnerCard from '../../components/WinnerCard';

function Game() {
  const room = generateRoom();
  // const { id: roomId } = useParams<{ id: string }>();
  const [activeTeamIdentifier, setActiveTeamIdentifier] = useState<string | null | undefined>(
    room.activeTeamIdentifier,
  );

  const onJokerTriggerd = (teamIdentifer: string, joker: Joker) => {
    // TODO
  };

  console.log(activeTeamIdentifier);
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
                key={`team_card_${team.identifier}`}
                context={team}
                className={styles.card}
                onJokerTriggered={joker => onJokerTriggerd(team.identifier, joker)}
                active={activeTeamIdentifier === team.identifier}
              />
            ))}
          </div>
        </div>
        {room.state === RoomState.CLOSED && (
          <div className={styles.room_closed}>
            <WinnerCard team={room.teams[0]} />
          </div>
        )}
        {room.state === RoomState.IN_PROGRESS && (
          <div className={styles.row}>
            <MultipleChoice className={styles.quiz} />
          </div>
        )}
      </div>
    </>
  );
}

export default Game;
