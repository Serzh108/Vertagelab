import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editGradient } from '../../redux/gradientOperations';
import GradientBlock from '../../components/GradientBlock/GradientBlock';
import styles from './Form.module.css';

let initState = {};

export default function Form({
  submitHandler,
  inputHandler,
  editedItem,
  action,
}) {
  // const history = useHistory();
  // const dispatch = useDispatch();
  // const currentId = match.params.id;
  // console.log('currentId :', currentId);
  // const currentItem = useSelector(state =>
  //   state.gradient.items.find(item => item.id === currentId),
  // );
  // console.log('currentItem :', currentItem);

  // useEffect(() => {
  //   if (currentItem) {
  //     setEditedItem(currentItem);
  //     // initState = { ...currentItem };
  //   }
  // }, [currentItem]);
  // const [editedItem, setEditedItem] = useState(initState);
  // ===----------------===
  //===----------------===
  // ===----------------===
  // const inputHandler = event => {
  //   const { name, value } = event.target;
  //   setEditedItem(prev => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };
  // ===----------------===
  // const submitHandler = e => {
  //   e.preventDefault();
  //   dispatch(editGradient(editedItem));
  //   history.push('/');
  // };
  // ===========---=============

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
      >
        {`${action} gradient`}
      </button>
    </form>
  );
}
