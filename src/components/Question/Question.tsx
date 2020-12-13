import cx from 'classnames';
import styles from './Question.module.css';

type Props = {
  className?: string;
};

const Question = ({ className }: Props) => {
  return (
    <div className={cx(styles.wrapper, className)}>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolores labore, alias
        aperiam obcaecati est.
      </p>
    </div>
  );
};

export default Question;
