import cx from 'classnames';
import FormattedPrice from '../FormattedPrice';

import styles from './CurrentStage.module.css';

type Props = {
  price: number;
};

const CurrentStage = ({ price }: Props) => {
  return (
    <div className={styles.wrapper}>
      <FormattedPrice price={price} />
    </div>
  );
};

export default CurrentStage;
