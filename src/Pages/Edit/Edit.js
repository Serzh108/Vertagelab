import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editGradient } from '../../redux/gradientOperations';
// import calcGradient from '../../helpers/calcGradient';
import Form from '../../components/Form/Form';
import GradientBlock from '../../components/GradientBlock/GradientBlock';
import validateValue from '../../helpers/validateValue';
import styles from './Edit.module.css';

// let initState = {};

export default function Edit({ match }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const currentId = match.params.id;
  // console.log('currentId :', currentId);
  const currentItem = useSelector(state =>
    state.gradient.items.find(item => item.id === currentId),
  );
  // console.log('currentItem :', currentItem);
  const initialState = currentItem;
  const [editedItem, setEditedItem] = useState(initialState);
  const [errorFormat, setErrorFormat] = useState(false);

  // useEffect(() => {
  //   if (currentItem) {
  //     setEditedItem(currentItem);
  //     // initState = { ...currentItem };
  //   }
  // }, [currentItem]);

  // ===----------------===
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
    dispatch(editGradient(editedItem));
    history.push('/');
  };
  // ===========---=============

  return (
    <>
      <div className={styles.EditBlock}>
        <h1 className="title">Edit</h1>
        <Form
          initialState={initialState}
          // submitHandler={submitHandler}
          // inputHandler={inputHandler}
          // editedItem={editedItem}
          // errorFormat={errorFormat}
          action="edit"
        />

        {editedItem && <GradientBlock item={editedItem} />}
      </div>
    </>
  );
}
