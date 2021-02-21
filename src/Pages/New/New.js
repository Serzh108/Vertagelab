import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addGradient } from '../../redux/gradientOperations';
import Form from '../../components/Form/Form';
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
      <div>
        <h1 className="title">New gradient</h1>
        {/* <form className={styles.form} onSubmit={submitHandler}>
          <input
            name="start"
            type="text"
            onChange={inputHandler}
            className={styles.input}
            placeholder="start gradient"
            required
          />
          <input
            name="end"
            type="text"
            onChange={inputHandler}
            className={styles.input}
            placeholder="end gradient"
            required
          />
          <button type="submit" title="add gradient" className={styles.button}>
            add gradient
          </button>
        </form> */}
        <Form
          submitHandler={submitHandler}
          inputHandler={inputHandler}
          editedItem={null}
          action="add"
        />
      </div>
    </>
  );
}
