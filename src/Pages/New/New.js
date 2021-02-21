import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addGradient } from '../../redux/gradientOperations';
import styles from './New.module.css';

const initialState = {
  start: '',
  end: '',
};

export default function New() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [newGradient, setNewGradient] = useState(initialState);
  // ===----------------===
  const inputHandler = event => {
    const { name, value } = event.target;
    setNewGradient(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  // ===----------------===
  const submitHandler = e => {
    e.preventDefault();
    dispatch(addGradient(newGradient));
    history.push('/');
  };
  // ===========---=============
  return (
    <>
      <div className={styles.NewBlock}>
        <h1>New gradient</h1>
        <form onSubmit={submitHandler}>
          <input
            name="start"
            type="text"
            onChange={inputHandler}
            placeholder="start gradient"
            required
          />
          <input
            name="end"
            type="text"
            onChange={inputHandler}
            placeholder="end gradient"
            required
          />
          <button type="submit" title="add gradient">
            add gradient
          </button>
        </form>
        <p>First value: {newGradient.start}</p>
        <p>End value: {newGradient.end}</p>
      </div>
    </>
  );
}
