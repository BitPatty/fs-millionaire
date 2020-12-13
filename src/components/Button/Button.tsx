import cx from 'classnames';

import styles from './Button.module.css';

type Props = {
  onClick: Function;
  className?: string;
  label?: string;
  children?: any;
  disabled?: boolean;
  cloaked?: boolean;
};

const Button = ({ cloaked, children, className, label, onClick, disabled = false }: Props) => {
  const wrapperClasses = cx(
    styles.wrapper,
    {
      [styles.cloaked]: cloaked,
      [styles.disabled]: disabled,
    },
    className,
  );

  return (
    <div
      onClick={() => {
        if (!disabled && !cloaked) onClick();
      }}
      className={wrapperClasses}
    >
      {label}
      {children}
    </div>
  );
};

export default Button;
