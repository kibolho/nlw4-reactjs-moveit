import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengeContext);

  const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel);

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        { percentToNextLevel === 0 ? (
          <span
            className={styles.currentExperience}
            style={{ left: `${percentToNextLevel + 1.6}%` }}
          >
            {currentExperience}
            {' '}
            xp
          </span>
        ) : (
          <span
            className={styles.currentExperience}
            style={{ left: `${percentToNextLevel}%` }}
          >
            {currentExperience}
            {' '}
            xp
          </span>
        )}

      </div>
      <span>
        {experienceToNextLevel}
        {' '}
        xp
      </span>
    </header>
  );
}