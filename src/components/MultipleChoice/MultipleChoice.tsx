import Answer from '../Answer';
import cx from 'classnames';

import Question from '../Question';

import styles from './MultipleChoice.module.css';
import { useState } from 'react';

type Props = {
  className?: string;
  blinkTimeout?: number;
  disabled?: boolean;
};

const MultipleChoice = ({ blinkTimeout = 5000, className, disabled = false }: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const [correctAnswerIdx, setCorrectAnswerIdx] = useState<number | null>(null);

  const handleAnswerClick = (idx: number) => {
    if (selectedAnswer != null) return;

    setSelectedAnswer(idx);

    setTimeout(() => {
      setCorrectAnswerIdx(0);
    }, blinkTimeout);
  };

  const renderAnswer = (idx: number) => {
    return (
      <Answer
        index={idx}
        onClick={handleAnswerClick}
        className={styles.option}
        textClassName={cx(styles.option_text, styles[`option_${idx}`])}
        blinkToCorrect={selectedAnswer != null && idx === correctAnswerIdx}
        selected={selectedAnswer === idx}
        disabled={disabled || selectedAnswer != null}
      />
    );
  };

  return (
    <div className={cx(styles.wrapper, className)}>
      <div className={styles.row}>
        <Question className={styles.question} />
      </div>
      <div className={styles.row}>
        {renderAnswer(0)}
        {renderAnswer(1)}
      </div>
      <div className={styles.row}>
        {renderAnswer(2)}
        {renderAnswer(3)}
      </div>
    </div>
  );
};

export default MultipleChoice;
