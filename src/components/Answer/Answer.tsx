import React from 'react';
import cx from 'classnames';
import styles from './Answer.module.css';

type Props = {
  onClick: Function;
  content: string;
  index: number;
  className?: string;
  textClassName?: string;
  selected?: boolean;
  blinkToCorrect?: boolean;
  disabled?: boolean;
};

const Answer = ({
  onClick,
  content,
  index,
  className,
  textClassName,
  selected = false,
  blinkToCorrect = false,
  disabled = false,
}: Props) => {
  const wrapperClasses = cx(
    styles.wrapper,
    {
      [styles.selected]: selected,
      [styles.correct]: blinkToCorrect,
      [styles.blink]: blinkToCorrect,
      [styles.disabled]: disabled || selected || blinkToCorrect,
    },
    className,
  );

  const handleClick = () => {
    if (!disabled) onClick(index);
  };

  return (
    <div onClick={() => handleClick()} className={wrapperClasses}>
      <p className={cx(styles.text, textClassName)}>{content}</p>
    </div>
  );
};

export default Answer;
