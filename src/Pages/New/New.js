import React, { useState, useEffect, useRef } from 'react';
import styles from './New.module.css';

export default function New() {
  // const intervalId = useRef();
  // const [clock, setClock] = useState(0);
  // useEffect(() => {
  //   if (isRun) {
  //     intervalId.current = setInterval(() => setTime(new Date()), 1000);
  //   }
  //   return () => () => clearInterval(intervalId.current);
  // }, [isRun]);
  // const startClock = () => {
  //   setClock(new Date());
  //   setIsRun(true);
  // };

  // ===----------------===

  // ===----------------===
  // ===========---=============
  return (
    <>
      <div className={styles.NewBlock}>
        {' '}
        <h1>New</h1>
      </div>
    </>
  );
}
