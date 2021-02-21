import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editGradient } from '../../redux/gradientOperations';
import calcGradient from '../../helpers/calcGradient';
import styles from './Edit.module.css';

export default function Edit({ match }) {
  const [editedItem, setEditedItem] = useState({});
  const dispatch = useDispatch();
  const currentId = match.params.id;
  console.log('currentId :', currentId);
  const currentItem = useSelector(state =>
    state.gradient.items.find(item => item.id === currentId),
  );
  console.log('currentItem :', currentItem);

  useEffect(() => {
    if (currentItem) {
      setEditedItem(currentItem);
    }
  }, [currentItem]);
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
  //===----------------===
  // ===----------------===
  const inputHandler = event => {
    const { name, value } = event.target;
    setEditedItem(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  // ===----------------===
  const submitHandler = e => {
    e.preventDefault();
    console.log('e.target', e.target);
    dispatch(editGradient(editedItem));
    // history.push('/');
  };
  // ===========---=============

  return (
    <>
      <div className={styles.EditBlock}>
        <h1>Edit</h1>
        <form onSubmit={submitHandler}>
          <input
            name="start"
            type="text"
            value={editedItem.start}
            onChange={inputHandler}
            placeholder="start gradient"
            required
          />
          <input
            name="end"
            type="text"
            value={editedItem.end}
            onChange={inputHandler}
            placeholder="end gradient"
            required
          />
          <button type="submit" title="add gradient">
            edit gradient
          </button>
        </form>
        <p
          style={{ background: calcGradient(editedItem.start, editedItem.end) }}
        >
          Start value: {editedItem.start} End value: {editedItem.end}
        </p>
      </div>
    </>
  );
}
