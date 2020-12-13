import cx from 'classnames';
import Joker from '../../enums/joker.enum';
import Team from '../../interfaces/team.interface';
import FormattedPrice from '../FormattedPrice';
import Jokers from '../Jokers';
import styles from './TeamCard.module.css';

type Props = {
  context: Team;
  className?: string | null | undefined;
  active?: boolean;
  onJokerTriggered: (joker: Joker) => void;
};

const TeamCard = ({ className = null, active = false, context, onJokerTriggered }: Props) => {
  const wrapperClasses = cx(
    styles.wrapper,
    {
      [styles.active]: active,
      [styles.defeated]: context.state.defeated,
    },
    className,
  );

  return (
    <div className={wrapperClasses}>
      <div className={styles.avatar} />
      <div className={styles.content}>
        <div className={styles.team_name}>{context.name}</div>
        <div className={styles.score}>
          <FormattedPrice price={context.state.level} />
        </div>
        <div className={styles.jokers}>
          <Jokers
            active={active}
            state={context.state.jokers}
            onJokerTriggered={onJokerTriggered}
          />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
