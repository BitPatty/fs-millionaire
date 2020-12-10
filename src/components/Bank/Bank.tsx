import React from 'react';
import cx from 'classnames';

import styles from './Bank.module.css';
import Button from '../Button';
import FormattedPrice from '../FormattedPrice';

const levels = [
  {
    price: 100,
    isMilestone: false,
  },
  {
    price: 200,
    isMilestone: false,
  },
  {
    price: 300,
    isMilestone: false,
  },
  {
    price: 500,
    isMilestone: false,
  },
  {
    price: 1000,
    isMilestone: true,
  },
  {
    price: 2000,
    isMilestone: false,
  },
  {
    price: 4000,
    isMilestone: false,
  },
  {
    price: 8000,
    isMilestone: false,
  },
  {
    price: 16000,
    isMilestone: false,
  },
  {
    price: 32000,
    isMilestone: true,
  },
  {
    price: 64000,
    isMilestone: false,
  },
  {
    price: 125000,
    isMilestone: false,
  },
  {
    price: 250000,
    isMilestone: false,
  },
  {
    price: 500000,
    isMilestone: false,
  },
  {
    price: 1000000,
    isMilestone: true,
  },
];

type Props = {
  onClose: Function;
};

const Bank = ({ onClose }: Props) => {
  const stages = levels.sort((a, b) => b.price - a.price);
  const currentStage = 12;

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {stages.map((stage, idx) => {
          return (
            <React.Fragment key={`stage_${idx}`}>
              <span
                className={cx(
                  styles.anchor,
                  stages.length - idx === currentStage && styles.current_stage,
                )}
              />
              <div className={cx(stage.isMilestone && styles.milestone)}>{stages.length - idx}</div>
              <div className={cx(styles.pricetag, stage.isMilestone && styles.milestone)}>
                <FormattedPrice price={stage.price} />
              </div>
              <div className={cx(styles.badges)}>
                <span>1</span>
                <span>1</span>
                <span>1</span>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <div className={styles.menu_wrapper}>
        <Button label="Close" onClick={() => onClose()} />
      </div>
    </div>
  );
};

export default Bank;
