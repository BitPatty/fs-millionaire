import cx from 'classnames';
import Joker from '../../enums/joker.enum';
import JokerState from '../../interfaces/joker-state.interface';
import Button from '../Button';
import MaterialIcon from '../MaterialIcon';

import styles from './Jokers.module.css';

type Props = {
  className?: string | null | undefined;
  state: JokerState;
  active: boolean;
  onJokerTriggered: (joker: Joker) => void;
};

const Jokers = ({ active, className = null, state, onJokerTriggered }: Props) => {
  return (
    <div className={cx(styles.wrapper, className)}>
      <Button
        className={styles.round}
        disabled={state.search.used}
        cloaked={!active}
        onClick={() => {
          if (!state.search.used) onJokerTriggered(Joker.SEARCH);
        }}
      >
        <MaterialIcon name="search" />
      </Button>
      <Button
        className={styles.round}
        disabled={state.audience.used}
        cloaked={!active}
        onClick={() => {
          if (!state.audience.used) onJokerTriggered(Joker.AUDIENCE);
        }}
      >
        <MaterialIcon name="people" />
      </Button>
      <Button
        className={styles.round}
        disabled={state.half.used}
        cloaked={!active}
        onClick={() => {
          if (!state.half.used) onJokerTriggered(Joker.HALF);
        }}
      >
        <MaterialIcon name="star_half" />
      </Button>
      <Button
        className={styles.round}
        disabled={state.switchQuestion.used}
        cloaked={!active}
        onClick={() => {
          if (!state.switchQuestion.used) onJokerTriggered(Joker.SWITCH);
        }}
      >
        <MaterialIcon name="loop" />
      </Button>
    </div>
  );
};

export default Jokers;
