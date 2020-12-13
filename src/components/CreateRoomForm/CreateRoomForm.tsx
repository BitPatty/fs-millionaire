import Button from '../Button';
import CreateRoomDto from '../../interfaces/create-room-dto.interface';
import Input from '../Input';
import styles from './CreateRoomForm.module.css';
import { useState } from 'react';

type Props = {
  onSubmit: (payload: CreateRoomDto) => any;
};

const CreateRoomForm = ({ onSubmit }: Props) => {
  const [teams, setTeams] = useState(['A-Team']);

  const handleTeamNameChange = (idx: number, newName: string) => {
    const newTeams = teams;
    newTeams[idx] = newName;
    setTeams([...newTeams]);
  };

  const addNewTeam = () => {
    setTeams([...teams, `A-Team ${teams.length + 1}`]);
  };

  const removeTeam = (idx: number) => {
    if (teams.length < 2) return;

    const newTeams = teams;
    newTeams.splice(idx, 1);
    setTeams([...newTeams]);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <h2 className={styles.title}>Raum erstellen</h2>
        {teams.map((team, idx) => (
          <div key={`create_team_${idx}`}>
            <Input
              label={'Team Name'}
              placeholder={'Team'}
              value={team}
              onChange={value => handleTeamNameChange(idx, value)}
            />
            {teams.length > 1 && (
              <div className={styles.alignRight}>
                <Button label="Team entfernen" onClick={() => removeTeam(idx)} />
              </div>
            )}
          </div>
        ))}
        {teams.length < 5 && <Button label="Weiteren Spieler hinzufügen" onClick={addNewTeam} />}
        <div className={styles.submit}>
          <Button
            label="Raum erstellen"
            disabled={teams.length < 1 || teams.find(t => !t || t.trim().length === 0) != null}
            onClick={() => onSubmit({ teams: teams.map(t => ({ name: t })) })}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateRoomForm;
