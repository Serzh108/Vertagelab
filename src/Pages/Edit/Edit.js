import React, { useState, useEffect, useRef } from 'react';
import styles from './Edit.module.css';

export default function Edit({ id }) {
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
      <div className={styles.EditBlock}>
        <h1>Edit</h1>
      </div>
    </>
  );
}
