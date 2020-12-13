import FormattedPrice from '../FormattedPrice';
import Joker from '../../enums/joker.enum';
import Jokers from '../Jokers';
import TeamInterface from '../../interfaces/team.interface';
import cx from 'classnames';
import styles from './TeamCard.module.css';

type Props = {
  team: TeamInterface;
  className?: string | null | undefined;
  active?: boolean;
  onJokerTriggered: (joker: Joker) => void;
};

const TeamCard = ({ className = null, active = false, team, onJokerTriggered }: Props) => {
  const wrapperClasses = cx(
    styles.wrapper,
    {
      [styles.active]: active,
      [styles.defeated]: team.isDefeated,
    },
    className,
  );

  return (
    <div className={wrapperClasses}>
      <div className={styles.avatar} />
      <div className={styles.content}>
        <div className={styles.team_name}>{team.name}</div>
        <div className={styles.score}>
          <FormattedPrice price={team.level.price} />
        </div>
        <div className={styles.jokers}>
          <Jokers active={active} team={team} onJokerTriggered={onJokerTriggered} />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
