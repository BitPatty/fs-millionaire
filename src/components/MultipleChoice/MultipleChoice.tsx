import { useEffect, useState } from 'react';

import Answer from '../Answer';
import Question from '../Question';
import QuestionInterface from '../../interfaces/question.interface';
import { answerQuestion } from '../../services/apiService';
import cx from 'classnames';
import styles from './MultipleChoice.module.css';

type Props = {
  roomUuid: string;
  onQuestionAnswered: () => void;
  question: QuestionInterface;
  removedAnswers?: string[];
  className?: string;
  blinkTimeout?: number;
  disabled?: boolean;
};

const MultipleChoice = ({
  roomUuid,
  blinkTimeout = 3000,
  className,
  question,
  disabled = false,
  removedAnswers,
  onQuestionAnswered,
}: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [correctAnswer, setCorrectAnswer] = useState<string | null>(null);

  useEffect(() => {
    setSelectedAnswer(null);
    setCorrectAnswer(null);
  }, [question]);

  const handleAnswerClick = async (idx: number, content: string) => {
    if (selectedAnswer != null) return;

    setSelectedAnswer(idx);

    const response = await answerQuestion(roomUuid, idx);

    setTimeout(() => {
      setCorrectAnswer(response.lastAnswer);

      setTimeout(() => {
        onQuestionAnswered();
      }, 3000);
    }, blinkTimeout);
  };

  const renderAnswer = (idx: number, content: string) => {
    const prefix = String.fromCharCode(0x41 + idx);

    return (
      <div className={styles.option_wrapper}>
        <Answer
          key={`${question.uuid}_answer_${idx}`}
          content={removedAnswers?.includes(content) ? '' : `${prefix}: ${content}`}
          index={idx}
          onClick={handleAnswerClick}
          className={styles.option}
          textClassName={cx(styles.option_text, styles[`option_${idx}`])}
          blinkToCorrect={selectedAnswer != null && content === correctAnswer}
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
          <Question text={question.description} className={styles.question} />
        </div>
      </div>
      <div className={styles.row}>
        {renderAnswer(0, question.answers[0])}
        {renderAnswer(1, question.answers[1])}
      </div>
      <div className={styles.row}>
        {renderAnswer(2, question.answers[2])}
        {renderAnswer(3, question.answers[3])}
      </div>
    </div>
  );
};

export default MultipleChoice;
