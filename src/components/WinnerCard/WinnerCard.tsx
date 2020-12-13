import Team from '../../interfaces/team.interface';
import FormattedPrice from '../FormattedPrice';
import TeamCard from '../TeamCard';
import styles from './WinnerCard.module.css';

type Props = {
  team: Team;
};

const WinnerCard = ({ team }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div>Sieger:</div>
      <div className={styles.team_name}>{team.name}</div>
      <div className={styles.score}>
        <FormattedPrice price={team.state.level} />
      </div>
      <img className={styles.avatar} src={team.avatarUrl} />
    </div>
  );
};

export default WinnerCard;
