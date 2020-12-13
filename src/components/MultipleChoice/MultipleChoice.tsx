import Answer from '../Answer';
import Question from '../Question';
import cx from 'classnames';
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
    const prefix = String.fromCharCode(0x41 + idx);

    return (
      <div className={styles.option_wrapper}>
        <Answer
          content={`${prefix}: lorem ipsum dolor sit`}
          index={idx}
          onClick={handleAnswerClick}
          className={styles.option}
          textClassName={cx(styles.option_text, styles[`option_${idx}`])}
          blinkToCorrect={selectedAnswer != null && idx === correctAnswerIdx}
          selected={selectedAnswer === idx}
          disabled={disabled || selectedAnswer != null}
        />
      </div>
    );
  };

  return (
    <div className={cx(styles.wrapper, className)}>
      <div className={styles.row}>
        <div className={styles.question_wrapper}>
          <Question className={styles.question} />
        </div>
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
