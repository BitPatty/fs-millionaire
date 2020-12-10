import Button from '../Button';
import styles from './MenuBar.module.css';

type Props = {
  onBankClick: Function;
};

const MenuBar = ({ onBankClick }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Button className={styles.entry} label="Bank" onClick={() => onBankClick()} />
      <Button className={styles.entry} label="Teams" onClick={() => {}} />
      <Button className={styles.entry} label="Bank" onClick={() => {}} />
    </div>
  );
};

export default MenuBar;
