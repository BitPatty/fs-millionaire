import cx from 'classnames';

import styles from './Button.module.css';

type Props = {
  onClick: Function;
  className?: string;
  label?: string;
};

const Button = ({ className, label, onClick }: Props) => {
  return (
    <div onClick={() => onClick()} className={cx(styles.wrapper, className)}>
      {label}
    </div>
  );
};

export default Button;
