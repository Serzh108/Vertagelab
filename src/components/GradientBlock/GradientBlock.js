import React from 'react';
import calcGradient from '../../helpers/calcGradient';
import styles from './GradientBlock.module.css';

export default function GradientBlock({ item }) {
  return (
    <div
      className={styles.gradientBlock}
      style={{ background: calcGradient(item.start, item.end) }}
    >
      <span className={styles.itemText}>Start: {item.start}</span>
      <span className={styles.itemText}>End: {item.end}</span>
    </div>
  );
}
