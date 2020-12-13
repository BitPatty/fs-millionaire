import cx from 'classnames';
import styles from './Question.module.css';

type Props = {
  text: string;
  className?: string;
};

const Question = ({ className, text }: Props) => {
  return (
    <div className={cx(styles.wrapper, className)}>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Question;
