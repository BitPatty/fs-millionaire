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
      <CurrentStage price={5000000} />
      <MenuBar onBankClick={() => setBankVisible(true)} />
      {bankVisible && <Bank onClose={() => setBankVisible(false)} />}
      <MultipleChoice className={styles.quiz} disabled={bankVisible} />
    </div>
  );
}

export default App;
