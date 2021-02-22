import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addGradient } from '../../redux/gradientOperations';
import { editGradient } from '../../redux/gradientOperations';
// import GradientBlock from '../../components/GradientBlock/GradientBlock';
import validateValue from '../../helpers/validateValue';
import styles from './Form.module.css';

// let initState = {};

export default function Form({
  initialState,
  // submitHandler,
  // inputHandler,
  // editedItem,
  // errorFormat,
  action,
}) {
  // ===------- new ---------===
  const history = useHistory();
  const dispatch = useDispatch();
  const [editedItem, setEditedItem] = useState(initialState);
  const initialErrorFormat = action === 'edit' ? false : true;
  const [errorFormat, setErrorFormat] = useState(initialErrorFormat);

  const inputHandler = event => {
    const { name, value } = event.target;

    if (!validateValue({ [name]: value })) {
      setErrorFormat(true);
      // return;
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
    // dispatch(editGradient(editedItem));
    history.push('/');
  };
  // ===------- /new ---------===
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
  // console.log('action = ', action);
  // console.log('errorFormat = ', errorFormat);
  // console.log('initialState = ', initialState);
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
        // disabled={`${errorFormat}`}
        // { errorFormat  && 'disabled'}
        // {...`${errorFormat ? ['disabled'] : []}`}
      >
        {`${action} gradient`}
      </button>
    </form>
  );
}
