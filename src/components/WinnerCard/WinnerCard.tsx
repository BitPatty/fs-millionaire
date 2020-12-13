import FormattedPrice from '../FormattedPrice';
import TeamInterface from '../../interfaces/team.interface';
import styles from './WinnerCard.module.css';

type Props = {
  team: TeamInterface;
};

const WinnerCard = ({ team }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.team_name}>
        {team.name}: <FormattedPrice price={team.level.price} />
      </div>
      {team.avatarUrl && <img className={styles.avatar} alt="Team Avatar" src={team.avatarUrl} />}
    </div>
  );
};

export default WinnerCard;
