import Button from '../Button';
import Joker from '../../enums/joker.enum';
import MaterialIcon from '../MaterialIcon';
import TeamInterface from '../../interfaces/team.interface';
import cx from 'classnames';
import styles from './Jokers.module.css';

type Props = {
  className?: string | null | undefined;
  team: TeamInterface;
  active: boolean;
  onJokerTriggered: (joker: Joker) => void;
};

const Jokers = ({ active, className = null, team, onJokerTriggered }: Props) => {
  return (
    <div className={cx(styles.wrapper, className)}>
      <Button
        className={styles.round}
        disabled={team.usedSearchJoker}
        cloaked={!active}
        onClick={() => {
          if (!team.usedSearchJoker) onJokerTriggered(Joker.SEARCH);
        }}
      >
        <MaterialIcon name="search" />
      </Button>
      <Button
        className={styles.round}
        disabled={team.usedAudienceJoker}
        cloaked={!active}
        onClick={() => {
          if (!team.usedAudienceJoker) onJokerTriggered(Joker.AUDIENCE);
        }}
      >
        <MaterialIcon name="people" />
      </Button>
      <Button
        className={styles.round}
        disabled={team.usedHalfJoker}
        cloaked={!active}
        onClick={() => {
          if (!team.usedHalfJoker) onJokerTriggered(Joker.HALF);
        }}
      >
        <MaterialIcon name="star_half" />
      </Button>
      <Button
        className={styles.round}
        disabled={team.usedSwitchJoker}
        cloaked={!active}
        onClick={() => {
          if (!team.usedSwitchJoker) onJokerTriggered(Joker.SWITCH);
        }}
      >
        <MaterialIcon name="loop" />
      </Button>
    </div>
  );
};

export default Jokers;
