import React, { useState } from 'react';

import Bank from './components/Bank';
import CurrentStage from './components/CurrentStage';
import MenuBar from './components/MenuBar';
import MultipleChoice from './components/MultipleChoice';
import styles from './App.module.css';

function App() {
  const [bankVisible, setBankVisible] = useState<boolean>(false);

  return (
    <div className="App">
      <div className={styles.row}>
        <CurrentStage className={styles.score} price={5000000} />
      </div>
      <div className={styles.row}>
        {bankVisible && <Bank onClose={() => setBankVisible(false)} />}
      </div>
      <div className={styles.row}>
        <MultipleChoice className={styles.quiz} disabled={bankVisible} />
      </div>
      <MenuBar onBankClick={() => setBankVisible(true)} />
    </div>
  );
}

export default App;
