import cx from 'classnames';
import styles from './TeamCard.module.css';

type Props = {
  className?: string | null | undefined;
  defeated?: boolean;
  active?: boolean;
};

const TeamCard = ({ className = null, active = false, defeated = false }: Props) => {
  const wrapperClasses = cx(
    styles.wrapper,
    {
      [styles.active]: active,
      [styles.defeated]: defeated,
    },
    className,
  );

  return (
    <div className={wrapperClasses}>
      <div className={styles.avatar} />
      <div>
        <div className={styles.team_name}>Team Name</div>
        <div className={styles.score}>Score</div>
      </div>
    </div>
  );
};

export default TeamCard;
