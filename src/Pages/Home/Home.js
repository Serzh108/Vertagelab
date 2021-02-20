import React, { useState, useEffect, useRef } from 'react';
import styles from './Home.module.css';

export default function Home() {
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
      <div className={styles.HomeBlock}>
        {' '}
        <h1>Home</h1>
      </div>
    </>
  );
}
