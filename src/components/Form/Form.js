import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addGradient } from '../../redux/gradientOperations';
import { editGradient } from '../../redux/gradientOperations';
import validateValue from '../../helpers/validateValue';
import styles from './Form.module.css';

export default function Form({ initialState, action }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [editedItem, setEditedItem] = useState(initialState);
  const initialErrorFormat = action === 'edit' ? false : true;
  const [errorFormat, setErrorFormat] = useState(initialErrorFormat);
  // ===----------------===
  const inputHandler = event => {
    const { name, value } = event.target;

    if (!validateValue({ [name]: value })) {
      setErrorFormat(true);
    } else setErrorFormat(false);

    setEditedItem(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  // ===----------------===
  const submitHandler = e => {
    e.preventDefault();
    const currentOperation = action === 'edit' ? editGradient : addGradient;
    dispatch(currentOperation(editedItem));
    history.push('/');
  };
  // ===----------------===
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <input
        name="start"
        type="text"
        value={editedItem?.start}
        onChange={inputHandler}
        className={styles.input}
        placeholder="start gradient"
        required
      />
      <input
        name="end"
        type="text"
        value={editedItem?.end}
        onChange={inputHandler}
        className={styles.input}
        placeholder="end gradient"
        required
      />
      <button
        type="submit"
        title={`${action} gradient`}
        className={styles.button}
        disabled={errorFormat}
      >
        {`${action} gradient`}
      </button>
    </form>
  );
}
