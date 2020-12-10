import cx from 'classnames';
import FormattedPrice from '../FormattedPrice';

import styles from './CurrentStage.module.css';

type Props = {
  price: number;
  className?: string;
};

const CurrentStage = ({ className, price }: Props) => {
  return (
    <div className={cx(styles.wrapper, className)}>
      <FormattedPrice price={price} />
    </div>
  );
};

export default CurrentStage;
