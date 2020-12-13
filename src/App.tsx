import React, { useState } from 'react';
import { TextBackgroundCorrect, TextBackgroundDefault, TextBackgroundSelected } from './assets';

import Bank from './components/Bank';
import Helmet from 'react-helmet';
import MenuBar from './components/MenuBar';
import MultipleChoice from './components/MultipleChoice';
import TeamCard from './components/TeamCard';
import styles from './App.module.css';

function App() {
  const [bankVisible, setBankVisible] = useState<boolean>(false);

  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href={TextBackgroundCorrect} />
        <link rel="preload" as="image" href={TextBackgroundDefault} />
        <link rel="preload" as="image" href={TextBackgroundSelected} />
      </Helmet>
      <div className="App">
        <div className={styles.row}>
          <div className={styles.team_cards}>
            <TeamCard className={styles.card} />
            <TeamCard className={styles.card} active={true} />
            <TeamCard className={styles.card} defeated={true} />
            <TeamCard className={styles.card} />
            <TeamCard className={styles.card} defeated={true} />
          </div>
        </div>
        <div className={styles.row}>
          {bankVisible && <Bank onClose={() => setBankVisible(false)} />}
        </div>
        <div className={styles.row}>
          <MultipleChoice className={styles.quiz} disabled={bankVisible} />
        </div>
        <MenuBar onBankClick={() => setBankVisible(true)} />
      </div>
    </>
  );
}

export default App;
